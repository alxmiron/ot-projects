import { Reducer } from "redux";
import { IAction } from "@Interfaces";
import { ISetUserPayload } from "./actions";
import { IStateProps } from "./interface";
import { getLocalItem, saveLocalItem, removeLocalItem } from "./utils";

export * from "./interface";
export * from "./actions";
export * from "./selectors";

export const initialState: IStateProps = {
    accessToken: null,
    user: null,
};

const addLocalState = (state: IStateProps): IStateProps => {
    return {
        ...state,
        accessToken: getLocalItem("ot_accessToken"),
        user: getLocalItem("ot_user", true),
    };
};

export const HomeReducer: Reducer<IStateProps, IAction<ISetUserPayload>> = (
    state = addLocalState(initialState),
    action
) => {
    switch (action.type) {
        case "Home_SetUser":
            saveLocalItem("ot_user", action.payload?.user);
            saveLocalItem("ot_accessToken", action.payload?.accessToken);
            return {
                ...state,
                accessToken: action.payload?.accessToken || null,
                user: action.payload?.user || null,
            };

        case "Home_ResetReducer":
            removeLocalItem("ot_user");
            removeLocalItem("ot_accessToken");
            return initialState;

        default:
            return state;
    }
};
