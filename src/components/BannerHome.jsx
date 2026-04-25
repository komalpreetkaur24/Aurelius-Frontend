import React, { useEffect, useRef } from "react";
import { bannerHomeStyles } from "../assets/dummyStyles";
import Navbar from "./Navbar";
import video from "../assets/bannervideo.mp4";
import BL1 from "../assets/BL1.png";
import BM1 from "../assets/BM1.png";
import BR1 from "../assets/BR1.png";

const BannerHome = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const reduceMotion =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.removeAttribute("autoplay");
        }
    }, []);

    return (
        <div className={`${bannerHomeStyles.container} w-full h-screen overflow-hidden relative`}>
            <div className={bannerHomeStyles.navbarWrapper}>
                <Navbar />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

            {/* bg video */}
            <div className={`${bannerHomeStyles.videoContainer} absolute top-0 left-0 w-full h-full`}>
                <video
                    ref={videoRef}
                    className={`${bannerHomeStyles.video} w-full h-full object-cover`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/fallback.jpg"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            {/* content */}
            <div className={bannerHomeStyles.contentContainer}>
                <div className={bannerHomeStyles.h1Container}>

                    <h1
                        style={bannerHomeStyles.playfairFont}
                        className={bannerHomeStyles.h1Text}
                    >
                        <span className={bannerHomeStyles.h1SpanGray}>
                            Elevate your time
                        </span>

                        <span className={bannerHomeStyles.h1SpanYellow}>
                            Experience true luxury
                        </span>
                    </h1>
                    <p className={bannerHomeStyles.subtext}>
                        Discover our exclusive collection of handcrafted timepieces that embody precision, luxury, and timeless style
                    </p>
                </div>

                {/* cards section */}


                {/* cards section */}
                <div className={bannerHomeStyles.cardsContainer}>
                    <div className={bannerHomeStyles.grid}>

                        {/* LEFT CARD */}
                        <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.leftCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardBase} ${bannerHomeStyles.cardPadding}`}>
                                <img
                                    src={BL1}
                                    alt="left logo"
                                    className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.leftCardImage}`}
                                />
                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelGray}`}>
                                Classic Heritage
                            </p>
                        </div>

                        {/* MIDDLE CARD */}
                        <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.middleCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardMiddle} ${bannerHomeStyles.cardPadding}`}>
                                <img
                                    src={BM1}
                                    alt="middle logo"
                                    className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.middleCardImage}`}
                                />
                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelYellow}`}>
                                Limited Edition
                            </p>
                        </div>

                        {/* RIGHT CARD */}
                        <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.rightCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardBase} ${bannerHomeStyles.cardPadding}`}>
                                <img
                                    src={BR1}
                                    alt="right logo"
                                    className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.rightCardImage}`}
                                    loading="lazy"
                                />
                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelGray}`}>
                                Modern Precision
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default BannerHome;