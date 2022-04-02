import type {initializeApp} from "firebase/app";
import type {Messaging} from "firebase/messaging";
import {browser} from "$app/env"
import type { Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADP9htFQz-vYQcJltHecCCcis9una8tDA",
    authDomain: "fallin-c1ada.firebaseapp.com",
    projectId: "fallin",
    storageBucket: "fallin.appspot.com",
    messagingSenderId: "430221686238",
    appId: "1:430221686238:web:43b5d7af0e4e6c0d80194f"
};


class FirebaseApp {
    appModule: typeof import("firebase/app")
    messageModule: typeof import("firebase/messaging")
    store: typeof import('firebase/firestore')
    authModule: typeof import("firebase/auth")
    auth: Auth
    

    app: ReturnType<typeof initializeApp>
    messaging: Messaging

    initialize = async () => {
        this.appModule = await import('firebase/app')
        if (!this.app) {
            this.app = this.appModule.initializeApp(firebaseConfig)
        }
        if (browser) {
            this.store = await import('firebase/firestore')
            this.authModule = await import("firebase/auth")
            this.auth = this.authModule.initializeAuth(this.app)
            
        }
    }

    initializeMessaging = async () => {

        window.addEventListener("message", console.log)

        this.messageModule = await import('firebase/messaging')
        this.messaging = this.messageModule.getMessaging(this.app)


        // Initialize Messaging
        const token = await this.messageModule.getToken(this.messaging, {vapidKey: "BNrLsf72E_Rtqu1aMTg6aI_P4ZbBQHb0It5JY40Xbxl5taSZI8omJmmvKmniujp6m5gQzercjk5RWN3K8cafY_w"})
        console.log(this.messageModule.onMessage(this.messaging, p => console.log({p})))
    
        console.log(token)
    }
}

export const fire = new FirebaseApp()
export type FbApp = typeof FirebaseApp.prototype
