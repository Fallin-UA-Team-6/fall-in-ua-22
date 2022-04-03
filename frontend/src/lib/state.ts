import type { User } from 'firebase/auth';
import { derived, readable, writable } from 'svelte/store';
import { fire } from './firebase';
import type { Group } from './models';

interface MutableAppState {
	selectedGroup?: Group;
	firestoreInitialized?: boolean;
	user?: User | undefined;
}

interface AppState {
	mutable: MutableAppState;
}

export const mutableState = writable<MutableAppState>({});

mutableState.subscribe((v) => {
	if (v.firestoreInitialized) {
		const unsub = fire.authModule.onAuthStateChanged(fire.auth, async (user) => {
			if (user) {
				// i.e. user is different
				if (user.uid !== v.user.uid) {
					mutableState.update(s => ({...s, user}));
				}
			
			} else {
				mutableState.update(s => ({...s, user: undefined}));
			}
		});
		return unsub
	}
	return () => {}
})


export const state = derived<[typeof mutableState], AppState>(
	[mutableState],
	([mutable]) => ({
		mutable,
	})
);
