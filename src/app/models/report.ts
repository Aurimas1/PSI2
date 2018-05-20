import { Timestamp } from '@firebase/firestore-types';

export interface Report {
    Id?: string;
    UserName: string;
    Date: Timestamp;
    Comment: string;
    Foto: string;
}
