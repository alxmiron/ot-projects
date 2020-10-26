import * as React from "react";
import { NextPage } from "next";

import { IErrorPage } from "@Interfaces";

const Custom404: NextPage<IErrorPage.IProps> = () => {
    return <div>Not found</div>;
};

export default Custom404; // withTranslation("common")(Custom404);
