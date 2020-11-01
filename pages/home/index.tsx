import React from "react";
import { useSelector } from "react-redux";
import { withRouter, NextRouter } from "next/router";
import { NextPage } from "next";

import { Heading } from "@Components/Heading";
import { accessTokenSelector } from "@Reducers/home";

interface IHomepageInitialProps {
    router: NextRouter;
}

const Home: NextPage<IHomepageInitialProps> = ({ router }) => {
    const accessToken = useSelector(accessTokenSelector);

    React.useEffect(() => {
        if (!accessToken) router.replace("/login");
    }, [router, accessToken]);

    return (
        <>
            <Heading />
        </>
    );
};

export default withRouter(Home);
