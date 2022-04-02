import type { User } from "firebase/auth";
import {derived, readable, writable} from "svelte/store";
import { fire } from "./firebase";
import type { Group } from "./models";



interface MutableAppState {
    selectedGroup?: Group;
    firestoreInitialized?: boolean;
}

export const mutableState = writable<MutableAppState>({})

export const authState = readable<User | undefined>(undefined, (set) => {
    fire.authModule.onAuthStateChanged(fire.auth, async (user) => {
        if (user) {
            set(user)
        } else {
            set(undefined)
        }
    });
})

interface AppState {
    mutable: MutableAppState,
    user: User | undefined
}

export const state = derived<[typeof mutableState, typeof authState], AppState>([mutableState, authState], ([mutable, user]) => ({
    mutable,
    user
}))