import type { User } from 'firebase/auth';

export class CheckIn {
	id: string;
	timestamp: Date;
	lat: number;
	lon: number;
}

export class GroupMember {
	user: User;
	latestCheckin: CheckIn;
}

export class Group {
	id: string;

	members: Array<GroupMember>;

	name: string;
	photoUrl: URL;
}
