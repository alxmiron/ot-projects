import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import {
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Alignment,
} from "@blueprintjs/core";
import { LoginForm } from "@Components/LoginForm";

const LoginPage: NextPage = () => {
    return (
        <>
            <Navbar>
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

export default LoginPage;
