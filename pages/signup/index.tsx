import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import {
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Alignment,
} from "@blueprintjs/core";
import { SignupForm } from "@Components/SignupForm";

const SignupPage: NextPage = () => {
    return (
        <>
            <Navbar>
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

export default SignupPage;
