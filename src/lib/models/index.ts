import type { User } from 'firebase/auth';

export class CheckIn {
	id: string;
	timestamp: Date | string;
	lat: number;
	lon: number;
}

export class GroupMember {
	user: User["uid"];
	name: string;
	avatar: string;
	latestCheckin: CheckIn;
}

export class Group {
	id: string;

	members?: Array<GroupMember>;
	memberIds: Array<User["uid"]>

	name: string;
	photoUrl: URL;
}
