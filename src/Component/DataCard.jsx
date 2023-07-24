/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Metric } from "@tremor/react";
import { Cards } from "./Cards";
const DataCard = () => {
    const [data, setData] = useState([]);

    const getData = (url) => {
        axios.get(url).then((res) => setData(res.data.data.children));
    };

    useEffect(() => {
        getData("https://www.reddit.com/r/reactjs.json");
    }, []);

    return (
        <div>
            <Metric className="text-center mt-5 mb-5">Listing Data</Metric>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((el, i) => (
                    <Cards key={i} {...el.data} />
                ))}
            </div>
        </div>
    );
};

export default DataCard;
