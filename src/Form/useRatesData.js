import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [data, setData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_yFO9onfDtt2lmUYROIq9hzVEprJWjamSKLeLJOOF&currencies=EUR%2CUSD%2CCAD%2CAUD%2CCHF%2CGBP%2CNOK&base_currency=PLN");
                const ratesData = await response.data;
                setData({
                    state: "success",
                    ratesData,
                });
            } catch (error) {
                setData({
                    state: "error",
                });
            }
        };
        setTimeout(getData, 1000);
    }, []);

    return data;
};