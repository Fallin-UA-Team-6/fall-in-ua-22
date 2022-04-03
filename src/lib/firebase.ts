import type { initializeApp } from 'firebase/app';
import type { Messaging } from 'firebase/messaging';
import { browser } from '$app/env';
import type { Auth } from 'firebase/auth';
import { mutableState } from '$lib/state';
import type { Firestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyADP9htFQz-vYQcJltHecCCcis9una8tDA',
	authDomain: 'fallin-c1ada.firebaseapp.com',
	projectId: 'fallin',
	storageBucket: 'fallin.appspot.com',
	messagingSenderId: '430221686238',
	appId: '1:430221686238:web:43b5d7af0e4e6c0d80194f'
};

class FirebaseApp {
	appModule: typeof import('firebase/app');
	messageModule: typeof import('firebase/messaging');
	storeModule: typeof import('firebase/firestore');
	store: Firestore;

	authModule: typeof import('firebase/auth');
	auth: Auth;

	app: ReturnType<typeof initializeApp>;
	messaging: Messaging;

	initialize = async () => {
		console.log("Initializing Firebase")
		this.appModule = await import('firebase/app');
		
		if (!this.app) {
			this.app = this.appModule.initializeApp(firebaseConfig);
		}
		if (browser) {
			this.storeModule = await import('firebase/firestore');
			this.store = this.storeModule.initializeFirestore(this.app, {});

			this.authModule = await import('firebase/auth');
			this.auth = this.authModule.getAuth(this.app);

			mutableState.update((ms) => ({
				...ms,
				user: this.auth.currentUser,
				firestoreInitialized: true
			}));
		}
	};

	initializeMessaging = async () => {
		console.debug('Attempting to initialize messaging');
		const storeToken = async () => {
			const token = await this.messageModule.getToken(this.messaging, {
				vapidKey:
					'BNrLsf72E_Rtqu1aMTg6aI_P4ZbBQHb0It5JY40Xbxl5taSZI8omJmmvKmniujp6m5gQzercjk5RWN3K8cafY_w'
			});

			if (!localStorage.getItem('token-on-server')) {
				const tokenCollection = this.storeModule.collection(this.store, 'user_tokens');

				const tokenDocQuery = this.storeModule.query(
					tokenCollection,
					this.storeModule.where('uid', '==', this.auth.currentUser.uid)
				);

				const tokenDocs = await this.storeModule.getDocs(tokenDocQuery);
				if (tokenDocs.size === 0) {
					console.warn('No token document found, creating one...');
					await this.storeModule.addDoc(tokenCollection, {
						uid: this.auth.currentUser.uid,
						tokens: [token]
					});
				} else if (tokenDocs.size) {
					const [first, ...rest] = tokenDocs.docs;

					const allTokens = [];
					tokenDocs.forEach((td) => allTokens.push(...td.get('tokens')));

					await Promise.all([
						this.storeModule.updateDoc(first.ref, {
							uid: this.auth.currentUser.uid,
							tokens: [token, ...allTokens]
						}),
						rest.map((rd) => this.storeModule.deleteDoc(rd.ref))
					]);
				}
				localStorage.setItem('token-on-server', 'true');
			}

			console.log(this.messageModule.onMessage(this.messaging, (p) => console.log({ p })));

			console.log(token);
		};

		this.messageModule = await import('firebase/messaging');
		try {
			this.messaging = await this.messageModule.getMessaging(this.app);
		} catch (e) {
			console.error(e);
			console.log('Notifications are not available on this device!!');
		}

		if (this.auth.currentUser) {
			await storeToken();
		} else {
			console.debug('User not signed in');
			const unsub = this.auth.onAuthStateChanged((user) => {
				if (user) {
					unsub();
					storeToken();
					console.log('Token fetched!');
				}
			});
		}
	};
}

export const fire = new FirebaseApp();
export type FbApp = typeof FirebaseApp.prototype;