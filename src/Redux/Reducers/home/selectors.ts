import { IStore } from "./interface";

export const accessTokenSelector = (state: IStore) => state.home.accessToken;

export const userSelector = (state: IStore) => state.home.user;
