/**
 * @copyright 2024 SuryaVashisth 
 * @license Apache-2.0
 */


/**
 * Components 
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
    return (
        <section
        id="home"
        className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">

                <div>
                   <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src=" https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/home/xo9vszlpwkjcqxjnve6a" 
                        width={40}
                        height={40}
                        alt="Surya Vashisth portrait" 
                        className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                        Available for work
                    </div>
                    </div> 
                    <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5">
                    {/* Crafting Innovative AI Solutions and Intelligent Systems for Tomorrow */}
                    Hi There! I am Surya Vashisth, 
                    A final-year B.Tech CSE student at Amity University Punjab
                     with a passion for crafting innovative AI solutions and exploring the endless possibilities of technology
                    </h2>



                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                        href={"https://drive.google.com/file/d/1KHbU0ViHZFSSWIc9MHzPT-jrtQOTRwaW/view?usp=sharing"} 
                        label="View CV"
                        icon="folder"
                        />

                        <ButtonOutline
                        href="Work"
                        label="My Work"
                        icon="work"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto  rounded-[60px] overflow-hidden ">
                        <img 
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/home/yjb4ezed4qxblnmovhjh" 
                        width={656}
                        height={800}
                        alt="Surya Vashisth" 
                        className="w-full" 
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero