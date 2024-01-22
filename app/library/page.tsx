'use client'
import styles from "./library.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Track from "../ui/Track";

export default function Library() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
        let QUERY = encodeURIComponent('*[_type == "track"]');

        // Compose the URL for your project's endpoint and add the query
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

        // fetch the content
        fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                console.log(result);
                setData(result);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={styles.bodyTracks}>
            <div className={styles.bodyMain}>
                <h1 className={styles.title}>My Tracks</h1>
                <div className={styles.tracksContainer}>
                    {data.map((item: any) => {

                        return (<Track key={item.id} name={item.trackName} date={item.releaseDate} time={item.duration} imageUrl={item.coverImage} mp3Link={item.file}></Track>)
                    }
                    )}
                </div>
            </div>
        </div>
    );
}
