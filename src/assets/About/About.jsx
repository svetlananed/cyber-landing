import Hero from "./Hero";
import Who from "./Who";
import What from "./What";
import Why from "./Why";
import How from "./How";
import decor1 from '../decor1-bg.png';
import decor1black from '../decor1black-bg.png';
import bgPurpleDot from '../bg-purple-dot.png';
import bg1 from '../bg1.png';
import bg2 from '../bg2.png';


function About() {
    return (
        <>
        {/*<img src={bgPurpleDot} className="-z10 h-200 absolute top-0 right-0 block dark:hidden opacity-60" />*/}
        <img src={bg1} className="-z10 h-200 w-full absolute top-0 right-0 block dark:hidden opacity-80" />
            <div className="block mt-50">
                <div className="relative">
                    <img src={decor1} className=" hidden dark:block h-150 absolute top-0 right-5" />
                    <img src={decor1black} className=" dark:hidden h-150 absolute top-0 right-5" />
                    
                    
                    <div className="absolute top-120 right-10 m-6 text-right"><Hero /></div>
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
        </>
    )
};


export default About;