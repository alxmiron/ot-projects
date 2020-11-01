import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem } from "@blueprintjs/core";

import { HomeActions, userSelector } from "@Reducers/home";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    if (!user) return <Menu />;
    return (
        <Menu>
            <MenuItem
                icon="person"
                text={`${user.first_name} ${user.last_name}`}
            />
            <MenuItem
                icon="log-out"
                text="Вийти"
                onClick={() => dispatch(HomeActions.Reset())}
            />
        </Menu>
    );
};
