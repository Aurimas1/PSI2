import { Timestamp } from '@firebase/firestore-types';

export interface SurveyResult {
    fireId?: string;
    id: string;
    friends: {name: string, been: boolean}[];
    fitForActivity: boolean;
    enjoyActivity: number;
    comment?: string;
}
