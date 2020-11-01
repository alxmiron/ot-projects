import { ValidationError } from "./interface";

export const isValidationError = (errors: any): errors is ValidationError => {
    return (
        !!errors &&
        Object.keys(errors).length > 0 &&
        Object.values(errors).every(Array.isArray)
    );
};
