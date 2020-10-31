import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Button } from "./index";

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Button
        disabled={boolean("Disabled", false)}
        onClick={action("button-click")}
    >
        Hello Button
    </Button>
);
