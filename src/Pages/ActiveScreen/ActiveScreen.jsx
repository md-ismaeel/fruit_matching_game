import React from "react";
import backgroundImage from "../../Assets/Images/bg-image.svg";
import backGreenBtn from "../../Assets/Images/backGreenBtn.svg";
import { useNavigate } from "react-router-dom";
import instructionScreenBackPathDotted from "../../Assets/Images/instructionScreenBackPathDotted.svg";
import HeartCard from "../../Components/HeartCard/HeartCard";
import FruitCard from "../../Components/FruitCard/FruitCard";
import "../../Components/IntroCards.css"
import goldenBtn from "../../Assets/Images/goldenButton.svg";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

export default function ActiveScreen() {
    const navigate = useNavigate();

    return (
        <>
            <section className="w-full min-h-screen flex justify-center items-center">
                <div
                    className="w-[80rem] h-[37rem] flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute top-6 right-[20rem]">
                        <ProgressBar />
                    </div>
                    <button
                        onClick={() => navigate("/instruction")}
                        className="absolute w-[120px] h-[40px] top-4 left-4 rounded hover:opacity-75 active:scale-95"
                    >
                        <img src={backGreenBtn} alt="back" />
                    </button>


                    {/* <FruitCard /> */}
                    {/* <HeartCard isItRedHeart={false} /> */}
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                    </div>

                </div>
            </section>
        </>
    );
};
