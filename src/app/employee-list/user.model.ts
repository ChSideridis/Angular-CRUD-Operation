export class user {
    id!: number;
    name?: string;
    username?: string;
    email?: string;
    address?: {
        street: string;
        city: string;
        zipcode: number;
    }
}