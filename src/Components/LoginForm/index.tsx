import React from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Button, Callout, Intent } from "@blueprintjs/core";
import { HomeActions, IUser } from "@Reducers/home";
import {
    apiRequest,
    ValidationError,
    isValidationError,
} from "@Services/API/Http";
import styles from "./LoginForm.module.scss";

interface ILoginFormProps {}

export const LoginForm: React.FC<ILoginFormProps> = () => {
    const dispatch = useDispatch();

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
                "/signin",
                undefined,
                {
                    email,
                    password,
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
                loading={loading}
            />
        </form>
    );
};
