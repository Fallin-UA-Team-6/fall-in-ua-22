/// <reference lib="webworker" />
//
//

//
// worker.onpush = function(event) {
//     console.log(event)
// }
//
// worker.addEventListener("install", async () => {
//     console.log("Installed!")
//
//     await fire.initializeMessaging(
//         worker.registration,
//         messaging
//     )
//
//
//
//     await window.Notification.requestPermission()
//
//     worker.registration.pushManager.subscribe().then(sub => {
//         console.log(sub.toJSON())
//         console.log(sub.endpoint)
//     })
// })
//
//
// console.log(worker)

export {}

console.log("Hi!")

import {fire} from "$lib/firebase"
import {getMessaging, getToken} from 'firebase/messaging'
import {initializeApp} from 'firebase/app'

const worker = (self as unknown) as ServiceWorkerGlobalScope;
worker.addEventListener("install", async () => {
    // await fire.initialize(initializeApp)
    // console.log("I have been registered", {fire})
    // await fire.initializeMessaging(worker.registrfation, {
    //     getMessaging, getToken
    // })
    console.log("Messaging has been initialized!")
})