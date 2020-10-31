import * as React from "react";
import { NextPage } from "next";
import "@blueprintjs/core/lib/css/blueprint.css";
import { FocusStyleManager } from "@blueprintjs/core";
import { Heading } from "@Components/Heading";

FocusStyleManager.onlyShowFocusOnTabs();

interface IHomepageInitialProps {
    namespacesRequired: string[];
}

const Home: NextPage = () => {
    return (
        <>
            <Heading text="asd" />
        </>
    );
};

Home.getInitialProps = async (): /* ctx: ReduxNextPageContext */
Promise<IHomepageInitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = Home; // withTranslation("common")(Home);

export default Extended;
