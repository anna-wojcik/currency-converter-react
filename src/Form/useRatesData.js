import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [data, setData] = useState({
        isLoading: true,
        error: null,
        ratesData: null,
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_yFO9onfDtt2lmUYROIq9hzVEprJWjamSKLeLJOOF&currencies=EUR%2CUSD%2CCAD%2CAUD%2CCHF%2CGBP%2CNOK&base_currency=PLN");
                setTimeout(() => {
                    setData({
                        isLoading: false,
                        error: false,
                        ratesData: response.data,
                    });
                }, 1000);
            } catch (error) {
                setData({
                    isLoading: false,
                    error: true,
                });
                console.error("Bład", error);
            }
        })();
    }, []);

    return data;
};