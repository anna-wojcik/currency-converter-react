import { useEffect, useState } from "react";
import { Paragraph } from "./styled";

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    const dayLong = dateTime.toLocaleDateString("pl-PL", { weekday: "long" });
    const dayNumeric = dateTime.toLocaleDateString("pl-PL", { day: "numeric" });
    const monthLong = dateTime.toLocaleDateString("pl-PL", { month: "long" });
    const time = dateTime.toLocaleTimeString("pl-PL");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Paragraph>
            Dzisiaj jest {dayLong}, {dayNumeric} {monthLong}, {time}
        </Paragraph>
    );
};

export default DateTime;