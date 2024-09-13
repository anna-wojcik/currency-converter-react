import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return dateTime;
};