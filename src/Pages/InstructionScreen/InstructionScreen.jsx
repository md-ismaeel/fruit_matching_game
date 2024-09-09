import React from "react";
import backgroundImage from "../../Assets/Images/bg-image.svg";
import backGreenBtn from "../../Assets/Images/backGreenBtn.svg";
import { useNavigate } from "react-router-dom";
import whiteBanana from "../../Assets/Images/whiteBanana.svg";
import progressbar from "../../Assets/Images/progressbar.svg";
import instructionScreenBackPathDotted from "../../Assets/Images/instructionScreenBackPathDotted.svg";


import "../../Components/IntroCards.css"


export default function InstructionScreen() {
    const navigate = useNavigate()
    return (
        <>
            <section className="w-full min-h-screen flex justify-center items-center">
                <div
                    className="w-full h-screen flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >



                </div>

                <div className="absolute top-6 right-[24rem]">
                    <img src={progressbar} alt="progress" className="relative w-[30rem] h-[2rem]" />
                    <img src={whiteBanana} alt="whiteBanana" className="absolute w-[5rem] top-[-.9rem] right-[-1.8rem]" />
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="absolute w-[120px] h-[40px] top-4 left-4 rounded hover:opacity-75 active:scale-95"
                >
                    <img src={backGreenBtn} alt="back" />
                </button>


            </section>
        </>
    );
}
