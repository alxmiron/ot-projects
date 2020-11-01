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
import { SignupForm } from "@Components/SignupForm";

import { accessTokenSelector } from "@Reducers/home";

interface ISignupPageProps {
    router: NextRouter;
}

const SignupPage: NextPage<ISignupPageProps> = ({ router }) => {
    const accessToken = useSelector(accessTokenSelector);

    React.useEffect(() => {
        if (accessToken) router.replace("/");
    }, [router, accessToken]);

    return (
        <>
            <Navbar fixedToTop>
                <NavbarGroup>
                    <NavbarHeading>OT. Signup</NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Link href="/login">Login</Link>
                </NavbarGroup>
            </Navbar>
            <SignupForm />
        </>
    );
};

export default withRouter(SignupPage);
