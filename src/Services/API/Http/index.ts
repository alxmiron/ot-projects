import "isomorphic-unfetch";
import { stringify } from "query-string";

export * from "./interface";
export * from "./utils";

const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const apiRequest = async <T>(
    methodType: string,
    url: string,
    params?: Record<string, any>,
    payload?: Record<string, any>
): Promise<T> => {
    return new Promise((resolve, reject) => {
        const query = params
            ? `?${stringify({
                  ...params,
                  api_key: process.env.NEXT_PUBLIC_API_KEY,
              })}`
            : "";

        fetch(`${BaseUrl}${url}${query}`, {
            body: JSON.stringify(payload),
            cache: "no-cache",
            headers: {
                "content-type": "application/json",
            },
            method: `${methodType}`,
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json().then(resolve);
                }
                return response.json().then(reject);
            })
            .catch(e => {
                e.json().then(reject);
            });
    });
};
