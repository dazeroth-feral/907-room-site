import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

import { config } from "dotenv";
config();

const client = new MongoClient(process.env.DB_URL);

export const GET = async (req) => {
    const trashRemoverList = await client.db("907").collection("trashRemoverList");
    const cursor = await trashRemoverList.find().sort({ date: 1 }).toArray();

    const url = req.url;
    let data = {};

    for (let i = 0; i < url.length; i++) {
        if (url[i] === '?') {
            let newUrl = url.slice(i + 1, url.length);
            for (let j = 0; j < newUrl.length; j++) {
                data.name = newUrl.slice(0, j);
                if (newUrl[j] === '|') {
                    if (newUrl.slice(j + 1, newUrl.length) === "MONGOPUSH") {
                        let normalName;

                        if(data.name == "Serhii"){normalName = "Сергій"};
                        if(data.name == "Vlad"){normalName = "Влад"};
                        if(data.name == "Maks"){normalName = "Максим"};

                        await trashRemoverList.insertOne({ name: normalName, date: new Date() })
                    };
                };
            };
        };
    };

    return new Promise((resolve) => {
        resolve(NextResponse.json(cursor));
    });
};