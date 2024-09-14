import { useState, useEffect } from 'react'
import whiteBanana from "../../Assets/Images/whiteBanana.svg";
import progressbarSvg from "../../Assets/Images/progressbar.svg";

export default function ProgressBar({
    initialFilledSteps = 1,
    totalSteps = 7,
    grayscale = true,
}) {
    const totalTiles = 40;

    const baseTiles = [
        `relative w-[1rem] h-[4rem] rotate-[-10deg] top-[-.5rem] bg-[#FFCF25]`,
        `relative w-[1rem] h-[4rem] rotate-[-10deg] top-[-.5rem] bg-[#FCE492]`,
    ];

    function computeSingleStep(baseTiles, totalSteps) {
        let singleStepShouldContainNTiles = Math.floor(totalTiles / totalSteps);
        singleStepShouldContainNTiles = Math.ceil(
            singleStepShouldContainNTiles / 2
        );
        let singleStepTiles = [];
        for (let idx = 0; idx < singleStepShouldContainNTiles; idx++) {
            singleStepTiles = [...singleStepTiles, ...baseTiles];
        }
        return singleStepTiles;
    }

    const singleStepTiles = computeSingleStep(baseTiles, totalSteps);

    function computeInitialState(initialFilledSteps, singleStepTiles) {
        let tiles = [];
        for (let idx = 0; idx < initialFilledSteps; idx++) {
            tiles = [...tiles, ...singleStepTiles];
        }
        return tiles;
    }
    const [stateTiles, setStateTiles] = useState(
        computeInitialState(initialFilledSteps, singleStepTiles)
    );

    useEffect(() => {
        setStateTiles(computeInitialState(initialFilledSteps, singleStepTiles));
    }, [initialFilledSteps]);

    function updateTiles() {
        if (totalTiles === stateTiles.length) {
            alert("its full");
        } else {
            setStateTiles([...stateTiles, ...singleStepTiles]);
        }
    }

    return (
        <section className={`relative w-[40rem] ${grayscale && "grayscale-[1]"} mt-3 `}>
            <div className="relative h-[2rem] border-[.15rem] rounded-md bg-[#E2F2F5] flex  gap-[0] w-[100%] overflow-hidden">
                {stateTiles.map((tile, idx) => (
                    <div key={idx} className={tile} />
                ))}
            </div>
            <img
                src={whiteBanana}
                className="rotate-[-23deg] absolute top-[-1.2rem] left-[36rem] w-[6rem]"
                onClick={updateTiles}
            />
        </section>
    );
}

