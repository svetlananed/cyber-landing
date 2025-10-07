import { useEffect, useState } from "react";
import RotatingText from "../Components/RotatingText";
import bg2 from '../bg2-1.png';


function About() {
    const words = ["Web", "Application", "Software"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (

        <>
            <div className="flex flex-col w-full  
                            max-w-[280px] h-[708px] px-[20px] pt-[30px] pb-[40px] 
                            sm:max-w-[600px] sm:h-[667px] sm:px-[20px] sm:pt-[80px] sm:pb-[40px]
                            md:max-w-[728px] md:h-[648px] 
                            lg:max-w-[984px] lg:h-[648px]
                            xl:max-w-[1160px] xl:h-[613px] xl:px-[60px] xl:pt-[83px] xl:pb-[50px] 
                            2xl:max-w-[1240px] 2xl:h-[649px] 2xl:px-[100px] 2xl:pt-[170px] 2xl:pb-[40px] ">
                <div>
                    Website development
                </div>
                <div>
                    <div>Building experience</div>
                    <div>not just IT product</div>
                </div>
                <div className="flex items-center gap-2 uppercase font-medium text-2xl md:text-2xl">
                    <div>
                        From idea to launch:
                    </div>
                    <div className="w-100"> 
                        <RotatingText
                        texts={['Landing', 'Visuals', 'Maintenance']}
                        mainClassName="px-2 mt-1 sm:px-2 md:px-3 text-fuchsia-600 overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                        />
                    </div>     
                </div>
                <div>
                    // to unlock the tomorrow’s opportunities
                </div>
                <div>
                    <a href="#contact" className="p-4 w-max bg-black text-white rounded-2xl border:none dark:border-r dark:border-t dark:border-fuchsia-600">
                        Ready to scale? Let’s talk
                    </a>
                </div>
            </div>









        {/*
        <img src="{bg2}" className="block absolute top-50 w-full transform   " />
            <div className="flex justify-center">
                
                <div className="flex flex-col w-[1480px] h-[730px] justify-around">

                    <div className="uppercase leading-tight">
                        <div className="text-5xl md:text-7xl  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                     bg-clip-text text-transparent font-medium [text-shadow:_-4px_-4px_0_black] dark:[text-shadow:none]">
                            Website development 
                        </div>
                        <div className="text-4xl  md:text-5xl">
                            <div>Building experience</div>
                            <div>not just IT product</div>
                        </div>
                    </div>
                    <div className="flex flex-col h-[100px] justify-between">
                        
                        <div className="flex items-center gap-2 uppercase font-medium text-2xl md:text-2xl">
                            <div>
                                From idea to launch:
                            </div>
                            <div className="w-100"> 
                                <RotatingText
                                texts={['Landing', 'Visuals', 'Maintenance']}
                                mainClassName="px-2 mt-1 sm:px-2 md:px-3 text-fuchsia-600 overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                                />
                            </div>
                            
                        </div>
                        <div className="text-lg md:text-xl">
                            <div>
                                // to unlock the tomorrow’s opportunities
                            </div>                     
                        </div>
                    </div>
                    <a
                            href="#contact"
                            className="p-4 w-max bg-black text-white rounded-2xl border:none dark:border-r dark:border-t dark:border-fuchsia-600"
                            >
                            Ready to scale? Let’s talk
                        </a>

                </div>
            </div> */}
        </>
    )
};


export default About;