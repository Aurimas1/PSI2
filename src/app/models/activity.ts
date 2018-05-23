import { Timestamp } from '@firebase/firestore-types';

export class Activity {
    fireId?: string;
    users: string[];
    name: string;
    description: string;
    start: Timestamp;
    end: Timestamp;
}
