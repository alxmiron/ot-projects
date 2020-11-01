import { IUser } from "./interface";

export interface ISetUserPayload {
    accessToken: string;
    user: IUser;
}

export const HomeActions = {
    SetUser: (accessToken: string, user: IUser) => ({
        type: "Home_SetUser",
        payload: {
            accessToken,
            user,
        },
    }),
    Reset: () => ({
        type: "Home_ResetReducer",
    }),
};
