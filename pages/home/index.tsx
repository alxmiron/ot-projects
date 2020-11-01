import * as React from "react";
import { NextPage } from "next";
import { Heading } from "@Components/Heading";

interface IHomepageInitialProps {
    namespacesRequired: string[];
}

const Home: NextPage = () => {
    return (
        <>
            <Heading />
        </>
    );
};

Home.getInitialProps = async (): /* ctx: ReduxNextPageContext */
Promise<IHomepageInitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = Home; // withTranslation("common")(Home);

export default Extended;
