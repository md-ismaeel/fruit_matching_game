import React, { useContext } from "react";
import IntroCards from "../../Components/IntroCards";
import backgroundImage from "../../Assets/Images/bg-image.svg";
import monkeyHappy from "../../Assets/Images/monkeyHappy.svg";
import monkeyWithHand from "../../Assets/Images/monkeyWithHand.svg";
import { FruitMatchingContext } from "../../Context/FruitMatchingContext";
import gearIcon from "../../Assets/Images/gearIcon.svg";
import starIcon from "../../Assets/Images/starIcon.svg";
import greenMountainShadow from "../../Assets/Images/greenMountainShadow.svg";

export default function IntroScreen() {
    const { page } = useContext(FruitMatchingContext);

    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div
                className="w-[80rem] h-[37rem] flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute bottom-5 left-10 w-full flex justify-start gap-10 z-10">
                    <div className="p-2">
                        <img src={gearIcon} alt="Settings" className="w-20 h-20" />
                    </div>
                    <div className="p-2">
                        <img src={starIcon} alt="Star" className="w-20 h-20" />
                    </div>
                </div>

                <div className="w-[80%] absolute bottom-2 left-[5.5rem] flex justify-center items-center z-1">
                    <img
                        src={greenMountainShadow}
                        alt="Green Mountain Shadow"
                        className="w-[70%]"
                    />
                </div>

                <IntroCards />
            </div>
        </section>
    );
}
