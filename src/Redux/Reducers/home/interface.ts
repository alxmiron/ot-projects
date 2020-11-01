export interface IUser {
    id: number;
    role_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    locale: string;
    created_at: string;
    updated_at: string;
}

export interface IStateProps {
    accessToken: string | null;
    user: IUser | null;
}

export interface IStore {
    home: IStateProps;
}
