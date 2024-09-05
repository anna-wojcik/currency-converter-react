import { Paragraph } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const DateTime = () => {
    const date = useCurrentDate();

    const dayLong = date.toLocaleDateString("pl-PL", { weekday: "long" });
    const dayNumeric = date.toLocaleDateString("pl-PL", { day: "numeric" });
    const monthLong = date.toLocaleDateString("pl-PL", { month: "long" });
    const time = date.toLocaleTimeString("pl-PL");

    return (
        <Paragraph>
            Dzisiaj jest {dayLong}, {dayNumeric} {monthLong}, {time}
        </Paragraph>
    );
};

export default DateTime;