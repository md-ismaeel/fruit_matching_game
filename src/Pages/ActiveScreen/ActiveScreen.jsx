import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../Assets/Images/bg-image.svg";
import backGreenBtn from "../../Assets/Images/backGreenBtn.svg";
import goldenButton from "../../Assets/Images/goldenButton.svg";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import RedHeartWithMaskedFruitImage from "../../Components/RedHeartWithMaskedFruitImage/RedHeartWithMaskedFruitImage";
import BlueHeartWithMaskedFruitName from "../../Components/BlueHeartWithMaskedFruitName/BlueHeartWithMaskedFruitName";
import fruits from "../../Data/Fruits";

export default function Activity() {
    const navigate = useNavigate();
    const totalNoOfBananas = 7;

    const [stateLastClickedRedCard, setStateLastClickedRedCard] = useState(null);
    const [stateLastClickedBlueCard, setStateLastClickedBlueCard] = useState(null);
    const [stateMatchedFruitName, setStateMatchedFruitName] = useState("grapes");
    const [stateShowItsAMatchDialog, setStateShowItsAMatchDialog] = useState(false);
    const [stateRedCardCurrentFruitName, setStateRedCardCurrentFruitName] = useState(null);
    const [stateBlueCardCurrentFruitName, setStateBlueCardCurrentFruitName] = useState(null);
    const [stateBananas, setStateBananas] = useState(1);

    function backBtnClicked() {
        navigate("/");
    }

    function hideItsAMatchDialog() {
        setStateShowItsAMatchDialog(false);
        if (stateBananas === totalNoOfBananas) {
            navigate("/rewards");
        }
    }

    function getAnyValidNRandomFruitsNames(fruitsToGet = 6) {
        const fruitsNames = [];
        while (fruitsNames.length < fruitsToGet) {
            const randomIdx = Math.floor(Math.random() * fruits.length);
            const fruit = fruits[randomIdx];
            if (!fruitsNames.includes(fruit.fruitName)) {
                fruitsNames.push(fruit.fruitName);
            }
        }
        return fruitsNames;
    }

    function shuffleFruitsNames(nFruitsNames = []) {
        const shuffledFruitsNames = [...nFruitsNames].sort(
            () => Math.random() - 0.5
        );
        return shuffledFruitsNames;
    }

    function formatFruitNamesIntoObj(fruitsNames) {
        return fruitsNames.map((fruit) => ({
            fruitName: fruit,
            isMatched: false,
            showFruitImage: false,
        }));
    }

    const nFruitsNames = getAnyValidNRandomFruitsNames();

    const [stateFruitNamesRedCard, setStateFruitNamesRedCard] = useState(formatFruitNamesIntoObj(nFruitsNames));
    const [stateFruitNamesBlueCard, setStateFruitNamesBlueCard] = useState(formatFruitNamesIntoObj(shuffleFruitsNames(nFruitsNames)));

    useEffect(() => {
        if (stateRedCardCurrentFruitName && stateBlueCardCurrentFruitName && stateRedCardCurrentFruitName === stateBlueCardCurrentFruitName) {
            setStateBananas(stateBananas + 1);

            setStateFruitNamesRedCard(
                stateFruitNamesRedCard.map((fruitObj) => {
                    if (fruitObj.fruitName === stateRedCardCurrentFruitName) {
                        fruitObj.isMatched = true;
                        setStateMatchedFruitName(fruitObj.fruitName);
                        setStateShowItsAMatchDialog(true);
                    }
                    return fruitObj;
                })
            );

            setStateFruitNamesBlueCard(
                stateFruitNamesBlueCard.map((fruitObj) => {
                    if (fruitObj.fruitName === stateBlueCardCurrentFruitName) {
                        fruitObj.isMatched = true;
                    }
                    return fruitObj;
                })
            );

            setStateBlueCardCurrentFruitName(null);
            setStateRedCardCurrentFruitName(null);
        } else if (stateRedCardCurrentFruitName && stateBlueCardCurrentFruitName && stateRedCardCurrentFruitName !== stateBlueCardCurrentFruitName) {
            setStateBlueCardCurrentFruitName(null);
            setStateRedCardCurrentFruitName(null);
        }
    }, [stateRedCardCurrentFruitName, stateBlueCardCurrentFruitName]);

    function redCardClicked(fruitName) {
        setStateRedCardCurrentFruitName(fruitName);
        setStateFruitNamesRedCard(
            stateFruitNamesRedCard.map((fruitObj) => {
                if (fruitObj.fruitName === stateLastClickedRedCard) {
                    fruitObj.showFruitImage = false;
                } else if (fruitObj.fruitName === fruitName) {
                    fruitObj.showFruitImage = true;
                }
                return fruitObj;
            })
        );
        setStateLastClickedRedCard(fruitName);
    }

    function blueCardClicked(fruitName) {
        setStateBlueCardCurrentFruitName(fruitName);
        setStateFruitNamesBlueCard(
            stateFruitNamesBlueCard.map((fruitObj) => {
                if (fruitObj.fruitName === stateLastClickedBlueCard) {
                    fruitObj.showFruitImage = false;
                } else if (fruitObj.fruitName === fruitName) {
                    fruitObj.showFruitImage = true;
                }
                return fruitObj;
            })
        );
        setStateLastClickedBlueCard(fruitName);
    }

    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div
                className="w-[80rem] h-[37rem] flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <img
                    src={backGreenBtn}
                    className="absolute top-[1rem] left-[1rem] w-[9rem] cursor-pointer"
                    onClick={backBtnClicked}
                    alt="back"
                />

                <div className="absolute top-[3rem] left-[18rem]">
                    <ProgressBar
                        initialFilledSteps={stateBananas}
                        totalSteps={7}
                        grayscale={false}
                    />
                </div>

                <div className="flex absolute left-[5.5rem] top-[10rem] w-[70rem] p-[1rem] justify-between">
                    <div className="grid grid-cols-3 grid-rows-2 gap-[2rem]">
                        {stateFruitNamesRedCard.map((fruit) => (
                            <div
                                key={fruit.fruitName}
                                onClick={() => redCardClicked(fruit.fruitName)}
                                className={`${fruit.isMatched && "invisible"}`}
                            >
                                <RedHeartWithMaskedFruitImage
                                    fruitName={fruit.fruitName}
                                    showFruitImage={fruit.showFruitImage}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 grid-rows-2 gap-[2rem]">
                        {stateFruitNamesBlueCard.map((fruit) => (
                            <div
                                key={fruit.fruitName}
                                onClick={() => blueCardClicked(fruit.fruitName)}
                                className={`${fruit.isMatched && "invisible"}`}
                            >
                                <BlueHeartWithMaskedFruitName
                                    fruitName={fruit.fruitName}
                                    showFruitImage={fruit.showFruitImage}
                                />
                            </div>
                        ))}
                    </div>

                    {stateShowItsAMatchDialog && (
                        <div className="absolute w-[80rem] h-[45rem]">
                            <div
                                className="bg-blue-300 w-full h-full top-[-12rem] left-[-7rem] absolute"
                                style={{ background: "rgba(0, 0, 0, 0.53)" }}
                            ></div>
                            <div className="z-[100] flex flex-col absolute">
                                <h2
                                    className="text-[#EF8F35] fontRighteous text-[6rem] font-[800] z-[200] relative left-[30rem] top-[-9rem]"
                                    style={{
                                        textShadow:
                                            "10.9861px 12.5555px 22.6px rgba(0, 0, 0, 0.25)",
                                        WebkitTextStroke: "1px white",
                                    }}
                                >
                                    It's a match!
                                </h2>
                                <div className="flex gap-[1rem] absolute">
                                    <div
                                        className="absolute top-[3rem] left-[20rem]"
                                        style={{
                                            filter:
                                                "drop-shadow(4.33508px 5.78011px 13.5832px rgba(235, 235, 235, 0.31)) drop-shadow(-10.1152px -7.22513px 25.7215px #EBEBEB)",
                                            transform: "rotate(-9.83deg)",
                                        }}
                                    >
                                        <RedHeartWithMaskedFruitImage
                                            fruitName={stateMatchedFruitName}
                                            showFruitImage={true}
                                        />
                                    </div>
                                    <div
                                        className="absolute top-[7rem] left-[32rem]"
                                        style={{
                                            filter:
                                                "drop-shadow(4.45073px 5.93431px 13.9456px rgba(235, 235, 235, 0.31)) drop-shadow(-10.3794px -7.41309px 26.381px #EBEBEB)",
                                            transform: "rotate(12.2deg)",
                                        }}
                                    >
                                        <BlueHeartWithMaskedFruitName
                                            fruitName={stateMatchedFruitName}
                                            showFruitImage={true}
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={hideItsAMatchDialog}
                                    className="w-[180px] cursor-pointer absolute top-[21rem] right-[-35rem] z-[250]"
                                >
                                    <img src={goldenButton} alt="Next" className="relative" />
                                    <span className="absolute right-2 top-4 w-full flex justify-center items-center z-10 text-white font-[900] text-3xl leading-none hover:opacity-75">
                                        NEXT
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
