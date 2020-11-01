import React from "react";
import { InputGroup, Button, Intent } from "@blueprintjs/core";
import styles from "./LoginForm.module.scss";

interface ILoginFormProps {}

export const LoginForm: React.FC<ILoginFormProps> = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <InputGroup
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                type="email"
                leftIcon="envelope"
                placeholder="Email"
                className={styles.input}
                required
                autoFocus
            />
            <InputGroup
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                }
                type="password"
                leftIcon="key"
                placeholder="Password"
                className={styles.input}
                required
            />
            <Button
                text="Login"
                type="submit"
                className={styles.submitBtn}
                intent={Intent.PRIMARY}
            />
        </form>
    );
};
