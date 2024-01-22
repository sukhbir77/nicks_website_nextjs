'use client'
import styles from "./track.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { client, urlFor } from "../../client";
import { getFile } from "@sanity/asset-utils";

interface trackProps {
    name: string;
    date: string;
    time: number;
    imageUrl: string;
    mp3Link: string;
}

interface FileBuilderOptions {
    assetId: string;
    extension: string;
    originalFilename: string;
    vanityFilename: string;
}

const Track: React.FC<trackProps> = ({ name, date, time, imageUrl, mp3Link }) => {
    const [play, setPlay] = useState(false);


    const getTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;

        return { minutes, seconds };
    }

    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

    return (

        <div className={styles.songContainer}>
            <Image
                className={styles.coverImage}
                src={`${urlFor(imageUrl)}`}
                alt="Cover Image"
                width={120}
                height={120}
                quality={100}
            />
            <div className={styles.detailsContainer}>
                <p className={styles.songTitle}>{name}</p>
                <p className={styles.para}>Release Date: {date}</p>
                <p className={styles.para}>Duration: {`${getTime().minutes}min${getTime().seconds}sec`}</p>
            </div>

            <div className={styles.buttonsContainer}>
                <a href={`${getFile(mp3Link, { projectId, dataset }).asset.url}?dl=`}
                    download
                >

                    <Image
                        className={styles.icons}
                        src={"/download.png"}
                        alt="Download Image"
                        width={80}
                        height={80}
                        quality={100}
                    />
                </a>
                <AudioPlayer
                    className={styles.audioPlayerCSS}
                    autoPlay={play}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    src={`${getFile(mp3Link, { projectId, dataset }).asset.url}`}
                    showJumpControls={false}
                    showSkipControls={false}
                    showFilledVolume={false}
                    showDownloadProgress={false}
                    customIcons={{
                        play: <Image
                            className={styles.iconsPlayPause}
                            style={{}}
                            src={"/play.png"}
                            alt="Download Icon"
                            width={80}
                            height={80}
                            quality={100}
                        />,

                        pause: <Image
                            className={styles.iconsPlayPause}
                            src={"/pause.png"}
                            alt="Play Icon"
                            width={80}
                            height={80}
                            quality={100}
                        />

                    }}
                />
            </div>
        </div>
    );
}

export default Track;