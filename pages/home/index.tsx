import * as React from "react";
import { NextPage } from "next";

// import { withTranslation } from "@Server/i18n";
import { HomeActions } from "@Actions";
import { IHomePage, ReduxNextPageContext } from "@Interfaces";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    return <div />;
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = Home; // withTranslation("common")(Home);

export default Extended;
