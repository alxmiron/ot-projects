import { combineReducers } from "redux";
import { IStateProps as IHomeStateProps, HomeReducer } from "./home";

export const Reducers = combineReducers({
    home: HomeReducer,
});

export interface IStateProps {
    home: IHomeStateProps;
}
