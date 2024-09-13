import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratesData, setRatesData] = useState();
    const [fullData, setFullData] = useState(ratesData ? new Date() : null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_yFO9onfDtt2lmUYROIq9hzVEprJWjamSKLeLJOOF&currencies=EUR%2CUSD%2CCAD%2CAUD%2CCHF%2CGBP%2CNOK&base_currency=PLN");
                setTimeout(() => {
                    setRatesData(response.data);
                    setIsLoading(false);
                    setFullData(response.data.meta.last_updated_at);
                }, 1000);
            } catch (error) {
                setError(true);
                setIsLoading(false);
                console.error("Bład", error);
            }
        })();
    }, []);

    return { isLoading, error, ratesData, fullData };
};