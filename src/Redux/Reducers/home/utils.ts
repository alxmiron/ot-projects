const isBrowser = typeof window !== "undefined";

export const removeLocalItem = (key: string): void => {
    if (!isBrowser) return;
    if (!window.localStorage) return;
    window.localStorage.removeItem(key);
};

export const saveLocalItem = <T>(key: string, data: string | T): void => {
    if (!isBrowser) return;
    if (!window.localStorage) return;
    if (!data) {
        removeLocalItem(key);
        return;
    }
    const savedData = typeof data !== "string" ? JSON.stringify(data) : data;
    window.localStorage.setItem(key, savedData);
};

export const getLocalItem = <T>(key: string, parse = false): T | null => {
    if (!isBrowser) return null;
    if (!window.localStorage) return null;
    const savedData = window.localStorage.getItem(key);
    if (!savedData) return null;
    return parse ? JSON.parse(savedData) : savedData;
};
