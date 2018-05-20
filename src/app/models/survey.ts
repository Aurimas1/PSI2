import { Timestamp } from '@firebase/firestore-types';

export interface Survey {
    id?: string;
    taken: boolean;
    date: Timestamp;
    friends: string[];
}
