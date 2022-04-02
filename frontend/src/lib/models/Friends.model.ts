import type {UserProfileModel} from "./UserProfile.model";

export enum FriendState {
    PENDING= "pending",
    ACCEPTED = "accepted",
    DENIED = "denied"

}

export interface FriendsModel {
    requester: UserProfileModel,
    recipient: UserProfileModel,
    state: FriendState
}