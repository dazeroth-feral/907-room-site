'use client';

import React from "react";
import { useState, useEffect } from "react";

import cssStyle from "./globalCss/page.module.css";
import AuthPage from "./components/content/AuthPage/AuthPage";
import TrashPage from "./components/content/TrashPage/TrashPage";

import TestPage from "./components/content/TestPage/TestPage";

const Home = () => {
    const [dataPack, setDataPack] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response_GET = await fetch(
                "http://localhost:3000/api/trashRemoverList",
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                });

            const data = await response_GET.json();
            setDataPack(data);
        };

        getData();
    }, []);

    return (
        <div className={cssStyle.content}>
            {/* <AuthPage /> */}
            {
                dataPack.length > 0
                    ? <TrashPage dataPack={dataPack} setDataPack={setDataPack} />
                    : <div className={cssStyle.waitingContent}>
                        <p>Завантаження даних з бази, будь ласка зажди...</p>
                    </div>
            }
            {/* <TestPage /> */}
        </div>
    )
}

export default Home;