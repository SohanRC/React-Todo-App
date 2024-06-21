import React from 'react';
import useChoice from '../../context/ChoiceContext';
function Choice() {
    const { choiceType, setChoice } = useChoice();

    return (
        <div className='w-[100%] bg-gray-600 flex justify-between text-white font-serif tracking-wider text-center flex-wrap'>
            <div className='w-[50%] max-[600px]:w-[100%]  max-[600px]:text-[1.6rem] py-3 text-[2rem]'>
                <h1 className='cursor-pointer hover:opacity-70 transition-colors duration-100 ease-in-out'
                    onClick={() => {
                        if (choiceType !== "PERSONAL") setChoice("PERSONAL");
                    }}>
                    Personal
                </h1>
                <div className={`w-[100%] h-[10px] ${choiceType === "PERSONAL" ? "bg-orange-500" : ""} `}></div>
            </div>
            <div className='w-[50%] max-[600px]:w-[100%] max-[600px]:text-[1.6rem] py-3 text-[2rem]'>
                <h1 className='cursor-pointer hover:opacity-70 transition-colors duration-100 ease-in-out'
                    onClick={() => {
                        if (choiceType !== "PROFESSIONAL") setChoice("PROFESSIONAL");
                    }}
                >
                    Professional
                </h1>
                <div className={`w-[100%] h-[10px] ${choiceType === "PROFESSIONAL" ? "bg-orange-500" : ""} `}></div>
            </div>
        </div>
    );
}

export default Choice;