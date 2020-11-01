import * as React from "react";
import { useSelector } from "react-redux";
import { withRouter, NextRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import {
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Alignment,
} from "@blueprintjs/core";

import { LoginForm } from "@Components/LoginForm";
import { accessTokenSelector } from "@Reducers/home";

interface ILoginPageProps {
    router: NextRouter;
}

const LoginPage: NextPage<ILoginPageProps> = ({ router }) => {
    const accessToken = useSelector(accessTokenSelector);

    React.useEffect(() => {
        if (accessToken) router.replace("/");
    }, [router, accessToken]);

    return (
        <>
            <Navbar fixedToTop>
                <NavbarGroup>
                    <NavbarHeading>OT. Login</NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Link href="/signup">Signup</Link>
                </NavbarGroup>
            </Navbar>
            <LoginForm />
        </>
    );
};

export default withRouter(LoginPage);
