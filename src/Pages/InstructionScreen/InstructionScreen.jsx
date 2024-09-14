import React from "react";
import backgroundImage from "../../Assets/Images/bg-image.svg";
import backGreenBtn from "../../Assets/Images/backGreenBtn.svg";
import { useNavigate } from "react-router-dom";
import whiteBanana from "../../Assets/Images/whiteBanana.svg";
import progressbar from "../../Assets/Images/progressbar.svg";
import instructionScreenBackPathDotted from "../../Assets/Images/instructionScreenBackPathDotted.svg";
import HeartCard from "../../Components/HeartCard/HeartCard";
import FruitCard from "../../Components/FruitCard/FruitCard";
import "../../Components/IntroCards.css"
import goldenBtn from "../../Assets/Images/goldenButton.svg";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";


export default function InstructionScreen() {
    const navigate = useNavigate()
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
                        onClick={() => navigate("/")}
                        className="absolute w-[120px] h-[40px] top-4 left-4 rounded hover:opacity-75 active:scale-95"
                    >
                        <img src={backGreenBtn} alt="back" />
                    </button>

                    <button
                        onClick={() => navigate("/active")}
                        className="absolute bottom-7 z-10 right-28 w-[180px] h-[60px] flex items-center justify-center"
                    >
                        <img
                            src={goldenBtn}
                            alt="golden-btn"
                            className="relative w-full h-full"
                        />
                        <span className="absolute right-2 w-full flex justify-center items-center z-10 text-white font-[900] text-3xl leading-none hover:opacity-75">
                            PLAY
                        </span>
                    </button>


                    {/* new */}
                    <div className="absolute top-[8.5rem] left-[7rem] flex gap-[3rem] w-[58rem] h-[24rem]  ">
                        <img src={instructionScreenBackPathDotted} className="absolute " />
                        {/* 01 Select a pink card. */}
                        <div className="relative">
                            <div
                                className="bg-stone-100 p-[2rem] w-[17rem] h-[22rem] absolute   flex flex-col z-[20]"
                                style={{ borderRadius: "4rem" }}
                            >
                                <div className="relative left-[2.5rem]">
                                    <div className="absolute left-[-.5rem]">
                                        <HeartCard />
                                    </div>
                                    <div className="absolute rotate-[7deg] left-[2rem] top-[-.5rem]">
                                        <FruitCard />
                                    </div>
                                </div>
                                <div
                                    className="bg-[#FFBC0B] font-[800] py-[.5rem] px-[1rem] pl-[.7rem] rounded-r-2xl rounded-l-md  left-[0rem] bottom-[6rem] absolute"
                                    style={{
                                        boxShadow: "0px 5.51724px 0px #D29901",
                                    }}
                                >
                                    <span
                                        className="bg-stone-100 w-[1rem] h-[1.3rem] absolute  rotate-[-52deg]  right-[0.2rem] top-[-.1rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                    <span className="text-white text-[1.5rem]">01</span>
                                    <span
                                        className="bg-stone-100 w-[.7rem] h-[.8rem] absolute  rotate-[-65deg]  left-[0.3rem] bottom-[.2rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                </div>
                                <div className="flex flex-col absolute bottom-[1rem] w-[10rem]  items-center justify-center text-center gap-[.2rem] left-[4rem]">
                                    <span className="text-[#11AEC6] font-[800] text-[1.8rem] leading-[2.3rem]">
                                        Select a pink card.
                                    </span>
                                    <span className="text-[#A6C930] font-[800] text-[1.3rem]">
                                        It has images.
                                    </span>
                                </div>
                            </div>
                            <div
                                className=" w-[20rem] h-[10rem] relative bottom-[-17rem] left-[-1rem] z-[1]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #9FC514, #9FC514), linear-gradient(0deg, #9FC514, #9FC514), #9FC514",
                                    clipPath: "ellipse(50% 16% at 50% 50%)",
                                }}
                            ></div>
                        </div>
                        {/* 02 Select a blue card. */}
                        <div className="relative">
                            <div
                                className="bg-stone-100 p-[2rem] w-[17rem] h-[22rem] absolute   flex flex-col z-[20]"
                                style={{ borderRadius: "4rem" }}
                            >
                                <div className="relative left-[3rem]">
                                    <div className="absolute ">
                                        <HeartCard isItRedHeart={false} />
                                    </div>
                                </div>

                                <div
                                    className="bg-[#A6CD25] font-[800] py-[.5rem] px-[1rem] pl-[.7rem] rounded-r-2xl rounded-l-md  left-[0rem] bottom-[6rem] absolute"
                                    style={{
                                        boxShadow: "0px 5.51724px 0px #8BAD1D",
                                    }}
                                >
                                    <span
                                        className="bg-stone-100 w-[1rem] h-[1.3rem] absolute  rotate-[-52deg]  right-[0.2rem] top-[-.1rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                    <span className="text-white text-[1.5rem]">02</span>
                                    <span
                                        className="bg-stone-100 w-[.7rem] h-[.8rem] absolute  rotate-[-65deg]  left-[0.3rem] bottom-[.2rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                </div>
                                <div className="flex flex-col absolute bottom-[1.3rem] w-[11rem]  items-center justify-center text-center gap-[.2rem] left-[4rem]">
                                    <span className="text-[#11AEC6] font-[800] text-[1.8rem] leading-[2.5rem]">
                                        Select a blue card.
                                    </span>
                                    <span className="text-[#A6C930] font-[800] text-[1.3rem]">
                                        It has alphabets.
                                    </span>
                                </div>
                            </div>
                            <div
                                className=" w-[20rem] h-[10rem] relative bottom-[-17rem] left-[-1rem] z-[1]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #9FC514, #9FC514), linear-gradient(0deg, #9FC514, #9FC514), #9FC514",
                                    clipPath: "ellipse(50% 16% at 50% 50%)",
                                }}
                            ></div>
                        </div>
                        {/* 03. if they're same. */}
                        <div className="relative">
                            <div
                                className="bg-stone-100 p-[2rem] w-[17rem] h-[22rem] absolute   flex flex-col z-[20]"
                                style={{ borderRadius: "4rem" }}
                            >
                                <div className="relative left-[2.5rem]">
                                    <div
                                        className="absolute left-[3rem] top-[2rem] rotate-[25deg]"
                                        style={{ transform: "matrix(0.98, 0.21, -0.5, 0.86, 0, 0)" }}
                                    >
                                        <HeartCard width={6} height={8} />
                                    </div>

                                    <div
                                        className="absolute rotate-[-11deg] left-[-2.5rem] top-[-.5rem]"
                                        style={{ transform: "matrix(0.95, -0.31, 0.39, 0.92, 0, 0)" }}
                                    >
                                        <HeartCard isItRedHeart={false} width={6} height={8} />
                                    </div>
                                </div>
                                <div
                                    className="bg-[#FB993D] font-[800] py-[.5rem] px-[1rem] pl-[.7rem] rounded-r-2xl rounded-l-md  left-[0rem] bottom-[6rem] absolute"
                                    style={{
                                        boxShadow: "0px 5.51724px 0px #C56204",
                                    }}
                                >
                                    <span
                                        className="bg-stone-100 w-[1rem] h-[1.3rem] absolute  rotate-[-52deg]  right-[0.2rem] top-[-.1rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                    <span className="text-white text-[1.5rem]">03</span>
                                    <span
                                        className="bg-stone-100 w-[.7rem] h-[.8rem] absolute  rotate-[-65deg]  left-[0.3rem] bottom-[.2rem]"
                                        style={{ clipPath: "ellipse(25% 40% at 50% 50%)" }}
                                    ></span>
                                </div>
                                <div className="flex flex-col absolute bottom-[1rem] w-[11rem]  items-center justify-center text-center gap-[.2rem] left-[4rem]">
                                    <span className="text-[#A6C930] font-[800] text-[1.3rem]">
                                        If they're same
                                    </span>
                                    <span className="text-[#11AEC6] font-[800] text-[1.8rem] leading-[2.3rem]">
                                        Its a match !
                                    </span>
                                    <span className="text-[#A6C930] font-[800] text-[1.3rem]">
                                        otherwise retry :(
                                    </span>
                                </div>
                            </div>
                            <div
                                className=" w-[20rem] h-[10rem] relative bottom-[-17rem] left-[-1rem] z-[1]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #9FC514, #9FC514), linear-gradient(0deg, #9FC514, #9FC514), #9FC514",
                                    clipPath: "ellipse(50% 16% at 50% 50%)",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="absolute top-[3rem] left-[15rem]">
                        {/* <ProgressBar /> */}
                    </div>
                </div>
            </section>
        </>
    );
}
