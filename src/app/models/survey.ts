import { Timestamp } from '@firebase/firestore-types';

export interface Survey {
    fireId?: string;
    id: string;
    taken: boolean;
    date: Timestamp;
    friends: string[];
}
