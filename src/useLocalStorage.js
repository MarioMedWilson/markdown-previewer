import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const saved = window.localStorage.getItem(key)
        if (saved !== null) {
            return saved
        }
        return initialValue
    });

    useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value])

    return [value, setValue];
}

export default useLocalStorage;
