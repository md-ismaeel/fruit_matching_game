import React from "react";
import { FruitMatchingContext } from "../Context/FruitMatchingContext";
import { useNavigate } from "react-router-dom";
import introCloud from "../Assets/Images/introCloud.svg";
import monkeyHappy from "../Assets/Images/monkeyHappy.svg";
import goldenBtn from "../Assets/Images/goldenButton.svg";
import banana from "../Assets/Images/banana.svg";
import emoji from "../Assets/Images/emojiThinking.svg";
import backGreenBtn from "../Assets/Images/backGreenBtn.svg";
import ProgressBar from "./ProgressBar/ProgressBar";


export default function IntroCards() {
    const { page, setPage } = React.useContext(FruitMatchingContext);
    const navigate = useNavigate();

    const screenData = {
        1: {
            cloudMessage: "Welcome Kiddo !",
            cloudCSS:
                "absolute top-10 left-10 w-[95%] h-[95%] text-[1.9rem] font-[800] text-[#11AEC6]",
            goldenBtnText: "START",
        },
        2: {
            cloudMessage: "Hi, I am Mizo! and I Love Bananas",
            cloudCSS:
                "absolute top-6 left-6 w-[100%] h-[100%]  text-[1.5rem] font-[900] text-[#11AEC6] px-5",
            goldenBtnText: "NEXT",
        },
        3: {
            cloudMessage: "Can you help me get some?",
            cloudCSS:
                "absolute top-7 left-8 w-[100%] h-[100%]  text-[1.5rem] font-[900] text-[#11AEC6] px-2",
            goldenBtnText: "YES",
        },
    };

    function handlePaginate() {
        setPage((prev) => prev + 1);

        if (page === 3) {
            navigate("/instruction");
            setPage(Number(1))
        }
    }

    function handleBack() {
        setPage((prev) => prev - 1);
    }

    return (
        <div className="absolute w-full h-full flex justify-end items-center">
            <div className="w-[62%] h-full">
                <div className="absolute top-[2rem] right-[6rem] w-[20rem] h-[10rem]">
                    <img
                        src={introCloud}
                        alt="intro cloud"
                        className="relative w-[100%] h-[100%]"
                    />
                    <span className={`${screenData[page]?.cloudCSS}`}>
                        {screenData[page]?.cloudMessage}
                    </span>
                    {page === 2 ? (
                        <img
                            src={banana}
                            alt="banana"
                            className="absolute bottom-[3.6rem] right-12 w-[50px] h-[50px]"
                        />
                    ) : page === 3 ? (
                        <img
                            src={emoji}
                            alt="emoji"
                            className="absolute bottom-[3.8rem] left-32 w-[35px] h-[35px]"
                        />
                    ) : (
                        ""
                    )}
                </div>

                <img
                    src={monkeyHappy}
                    alt="happy monkey"
                    className="happy-monkey absolute bottom-5 w-[450px] h-[450px] z-20"
                />
                <button
                    onClick={handlePaginate}
                    className="absolute bottom-10 right-24 w-[180px] h-[60px] flex items-center justify-center"
                >
                    <img
                        src={goldenBtn}
                        alt="golden-btn"
                        className="relative w-full h-full"
                    />
                    <span className="absolute right-2 w-full flex justify-center items-center z-10 text-white font-[900] text-3xl leading-none hover:opacity-75">
                        {screenData[page]?.goldenBtnText}
                    </span>
                </button>
            </div>

            {page >= 2 && (
                <button
                    onClick={handleBack}
                    className="absolute w-[120px] h-[40px] top-4 left-4 rounded hover:opacity-75 active:scale-95"
                >
                    <img src={backGreenBtn} alt="back" />
                </button>
            )}
        </div>
    );
}
