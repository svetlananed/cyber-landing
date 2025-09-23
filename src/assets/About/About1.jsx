import { useEffect, useState } from "react";
import Hero from "./Hero";
import Who from "./Who";
import What from "./What";
import Why from "./Why";
import How from "./How";
{/*import decor1 from '../decor1color-bg.png';*/}
import decor1 from '../triangles.png';

import decor2 from '../decor2-bg.png';
import decor1black from '../decor1black-bg.png';
import bgPurpleDot from '../bg-purple-dot.png';
import bg1 from '../bg1.png';
import bg2 from '../bg2-1.png';
import block1 from '../block.png';
import icon1 from '../icon1.png';
import logoModule from '../LOGO-module.png';

import nightCity from '../night-city.png';

import fon1 from '../night-city.png';
import RotatingText from "../Components/RotatingText";
import lineblack from "../line.png";

        
    

        



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

        

        {/*<img src={decor1black} className=" dark:hidden h-150 absolute top-30 right-15" />*/}
        {/*<img src={bg1} className="-z10 h-200 w-full absolute top-0 right-0 block dark:hidden opacity-80" />*/}

        

            


            <div className="relative">
                
                <div className="relative ">
                    <img src={bg2} className="block dark:hidden h-170 absolute -top-15 right-0 opacity-50 transform"/>
                    <img src={decor1} className="block h-160 absolute -top-10 right-30 transform   " />
                </div>
                {/*<div className="absolute top-100 right-90 bg-black h-0.5 w-50"/>
                <div className="absolute top-93 right-73 bg-black rotate-135 h-0.5 w-20"/>
                <div className="absolute top-100 right-110 text-black text-xl">Flexibility</div>
                <div className="absolute top-80 right-100 bg-black h-0.5 w-50"/>
                <div className="absolute top-73 right-83 bg-black rotate-135 h-0.5 w-20"/>
                <div className="absolute top-80 right-120 text-black text-xl">Efficiency</div>*/}

                {/*Content*/}

                <div className="relative z-10 flex flex-col justify-between pt-20  px-10 gap-10">
                    <h1 className=" uppercase leading-tight">
                        <div className="text-5xl md:text-7xl  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                     bg-clip-text text-transparent font-medium [text-shadow:_-4px_-4px_0_black] dark:[text-shadow:none]">
                            Building experience
                        </div>
                        <div className="text-4xl  md:text-5xl">
                            not just IT product
                        </div>
                    </h1>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-2 uppercase font-medium text-2xl md:text-2xl">
                            <span>From idea to launch:</span> 

                            <div className="w-100"> 
                                <RotatingText
                                texts={['Landing', 'Website visuals', 'Website maintenance']}
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

                        <div className="text-lg md:text-xl mt-10">
                            <p>
                                // crafting reliable and elegant technology  
                            </p>
                            <p>
                               // to unlock the tomorrow’s opportunities
                            </p>

                        </div>
                    </div>

                    <div className="mt-5">
                       
                        <a
                        href="#contact"
                        className="p-4 bg-black  text-white rounded-2xl border:none dark:border-r dark:border-t dark:border-fuchsia-600"
                        >
                        Ready to scale? Let’s talk
                        </a>
                    </div>                  
                </div>

                
            









                






                

                
{/*}
            <div>
                <img src={block1} className="h-80 absolute mt-30 ml-200"/>
                
                <div className="absolute mt-50 ml-210 w-115 text-xl space-y-4">  
                    <div>
                        OSTER is a collective of developers, engineers, and designers driven by a shared vision: turning complex challenges into simple, functional, and elegant digital solutions. We believe technology should remove friction, not add it—and every line of code we deliver carries that philosophy.
                    </div> 
                </div>
            </div>

            <div>
                <img src={block1} className="h-80 absolute mt-60 ml-110"/>
                
                <div className="absolute mt-80 ml-120 w-115 text-xl space-y-4">  
                    <div>
                        OSTER is a collective of developers, engineers, and designers driven by a shared vision: turning complex challenges into simple, functional, and elegant digital solutions. We believe technology should remove friction, not add it—and every line of code we deliver carries that philosophy.
                    </div> 
                </div>
            </div>

            <div>
                <img src={block1} className="h-80 absolute mt-10 ml-20"/>
                
                
                <div className="absolute mt-35 ml-30 w-115 text-xl space-y-4">  
                    <div>
                        OSTER is a collective of developers, engineers, and designers driven by a shared vision: turning complex challenges into simple, functional, and elegant digital solutions. We believe technology should remove friction, not add it—and every line of code we deliver carries that philosophy.
                    </div> 
                </div>
            </div>
*/}
            </div>





{/*
                <div>           
                        We don't just build IT products - we craft digital experiences that accelerate growth, amplify impact, and unlock tomorrow's opportunities
                </div>
                */}
            


        {/*
            <div className="block mt-50">
                <div className="relative">
                    <div className=""><Hero /></div>
                    <div><Who /></div>
                    <div><What /></div>
                    <div><Why /></div>
                    <div><How /></div>
                    <div>
                        <div>Client Outcomes</div>
                        <div>Our partners—whether startups or enterprises—gain more than code. They gain digital foundations designed to last. From secure backend infrastructures to intuitive front-end experiences, we deliver technology that grows with your business.
                        </div>
                    </div>
                    <div>
                        <div>Call-to-Action</div>
                        <div>Ready to Build What’s Next?</div>
                        <button>Let’s Talk</button>
                    </div>
                </div>
            </div>
            */}
        </>
    )
};


export default About;