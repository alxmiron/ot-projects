import React from "react";
import { InputGroup, Button, Intent } from "@blueprintjs/core";
import styles from "./SignupForm.module.scss";

interface ISignupFormProps {}

export const SignupForm: React.FC<ISignupFormProps> = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <InputGroup
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                }
                type="text"
                placeholder="First name"
                leftIcon="id-number"
                className={styles.input}
                required
                autoFocus
            />
            <InputGroup
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                }
                type="text"
                placeholder="Last name"
                leftIcon="id-number"
                className={styles.input}
                required
            />
            <InputGroup
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                }
                type="tel"
                placeholder="Phone number"
                leftIcon="phone"
                className={styles.input}
                required
            />

            <InputGroup
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                type="email"
                placeholder="Email"
                leftIcon="envelope"
                className={styles.input}
                required
            />
            <InputGroup
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                }
                type="password"
                placeholder="Password"
                leftIcon="key"
                className={styles.input}
                required
            />

            <Button
                text="Signup"
                type="submit"
                className={styles.submitBtn}
                intent={Intent.PRIMARY}
            />
        </form>
    );
};
