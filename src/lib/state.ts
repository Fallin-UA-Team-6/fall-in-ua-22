import {browser} from "$app/env";
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

console.log( browser && localStorage.getItem("authState") ? JSON.parse(localStorage.getItem("authState")) : undefined)

export const mutableState = writable<MutableAppState>({
	user: browser && localStorage.getItem("authState") ? JSON.parse(localStorage.getItem("authState")) : undefined
});


let mutableStateAuthSubscription = mutableState.subscribe((v) => {
	if (v.firestoreInitialized) {
		mutableStateAuthSubscription()
		fire.authModule.onAuthStateChanged(fire.auth, async (user) => {
			if (user) {
				mutableState.update(s => ({...s, user}));
				localStorage.setItem("authState", JSON.stringify(user))		
			} else {
				mutableState.update(s => ({...s, user: undefined}));
				localStorage.removeItem("authState")
			}
		});
	}

})

export const state = derived<[typeof mutableState], AppState>(
	[mutableState],
	([mutable]) => ({
		mutable,
	})
);
