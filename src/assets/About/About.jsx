import Hero from "./Hero";
import Who from "./Who";
import What from "./What";
import Why from "./Why";
import How from "./How";
import back from '../back.png';

function About() {
    return (
        <>
            <div className="block mt-50">
                <div className="relative">
                    {/*<img src={back} lassName="w-full h-auto" />*/}
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