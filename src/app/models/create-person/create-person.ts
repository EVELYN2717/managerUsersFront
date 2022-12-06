import { NumberValueAccessor } from "@angular/forms";

export interface CreatePerson{
    name: string;
    lastName?: string;
    id: string;
    email: string;
    gender: number;
    age?: number;
    hobbie: number;
}