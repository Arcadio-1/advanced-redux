import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(async (requestConfig, applydata) => {
    try {
      setError(null);
      const request = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.header ? requestConfig.header : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!request.ok) {
        throw new Error("");
      }
      const data = await request.json();
      applydata(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return { error, isLoading, sendRequest };
};
export default useHttp;
