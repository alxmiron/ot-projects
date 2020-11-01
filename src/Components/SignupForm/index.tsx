import React from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Callout, Button, Intent } from "@blueprintjs/core";
import {
    apiRequest,
    ValidationError,
    isValidationError,
} from "@Services/API/Http";
import { HomeActions, IUser } from "@Reducers/home";
import styles from "./SignupForm.module.scss";

interface ISignupFormProps {}

export const SignupForm: React.FC<ISignupFormProps> = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loading, setLoading] = React.useState(false);

    const [errors, setErrors] = React.useState<Error | ValidationError | null>(
        null
    );

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);
        try {
            type SignupRes = {
                data: {
                    access_token: string;
                    user: IUser;
                };
            };
            const res = await apiRequest<SignupRes>(
                "POST",
                "/signup",
                undefined,
                {
                    first_name: firstName,
                    last_name: lastName,
                    phone,
                    email,
                    password,
                    role_id: 2,
                }
            );
            dispatch(HomeActions.SetUser(res.data.access_token, res.data.user));
        } catch (reqError) {
            setErrors(reqError);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            {errors && (
                <Callout
                    icon="warning-sign"
                    intent={Intent.DANGER}
                    className={styles.callout}
                >
                    {isValidationError(errors)
                        ? Object.values(errors)
                              .flat()
                              .join(" ")
                        : errors.message}
                </Callout>
            )}
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
                loading={loading}
            />
        </form>
    );
};
