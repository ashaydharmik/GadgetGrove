import React, { useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/api"

const useFetch=(endpoints)=>{
const [data, setData] = useState();

useEffect(()=>{
    makeApiCall()
},[endpoints])

const makeApiCall = async()=>{
    const res = await fetchDataFromApi(endpoints)
    setData(res)
}

return {data};
};






export default useFetch;

