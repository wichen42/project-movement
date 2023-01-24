import HText from "@/shared/HText";
import { ProgramType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    UserIcon,
    UsersIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Program from "./Program";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

const abstractWaves = "before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves";
const sparkles = "before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const programs: Array<ProgramType> = [
    {
        icon: <UserIcon className="h-6 w-6"/>,
        title: "Personal Training",
        description: "One on one individualized training focused on helping our clients achieve their fitness goals. With undivided attention to our clients we help program, teach, and coach our clients so they leave with more than just a workout."
    },
    {
        icon: <UsersIcon className="h-6 w-6"/>,
        title: "Semi-Private Training - Coming Soon",
        description: "2 is always better than 1. Workout with a partner with the same fitness goals as you so you do not have to feel like you're in this alone, we got you!"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Small Group Training",
        description: "Our small group classes are focused on delivering heart pumping and fat shedding results. In our Strength & Conditioning based HIIT classes we will generate POWERFUL movements to get you moving."
    }
]

const Programs = ({setSelectedPage}: Props) => {

  return (
    <section id="programs"
    className="mx-auto min-h:full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Programs)}
        >
            {/* Header */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}} 
            variants={{
              hidden: {opacity: 0, x:-50}, 
              visible: {opacity: 1, x:0}
            }}
            >
                <HText>MORE THAN JUST A GYM</HText>
                {/* <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis aliquid cumque eaque perspiciatis exercitationem repellat ut adipisci sunt saepe, incidunt, mollitia necessitatibus labore aperiam fugit, totam voluptatibus itaque vero.
                </p> */}
            </motion.div>

            {/* Benefits */}
            <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {programs.map((program: ProgramType) => (
                    <Program key={program.title} icon={program.icon} title={program.title} description={program.description} setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>

            {/* Graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto"/>
                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                        <div
                        className="mt-10">
                            <motion.div
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}} 
                            transition={{duration: 0.5}} 
                            variants={{
                                hidden: {opacity: 0, x:50}, 
                                visible: {opacity: 1, x:0}
                            }}
                            >
                                <HText>
                                    START YOUR FITNESS JOURNEY WITH{" "}
                                    <span className="text-secondary-500">MOMENTUM</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                        <motion.div
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{once: true, amount: 0.5}} 
                        transition={{delay: 0.2, duration: 0.5}} 
                        variants={{
                            hidden: {opacity: 0, x:-50}, 
                            visible: {opacity: 1, x:0}
                        }}
                        >
                            <p className="mt-10 mb-5 text-2xl font-bold">Credentials: </p>
                            <p>Owner / Personal Trainer</p>
                            <p>NASM Certified Personal Trainer</p>
                            <p>NASM Corrective Exercise Specialist</p>
                            <p>NASM Performance Enhancing Specialist</p>
                            <p>ISSA Strength & Conditioning Coach</p>
                            <p>ISSA Nutrition Coach</p>
                            <p>ISSA Certified Personal Trainer</p>
                            <p>NFPT Functional Training Specialist</p>
                            <p>CPR/AED Certified</p>
                            <p className="my-5">Kevin loves his job as a personal trainer and coach. He believes that personal trainers and coaches are the frontline of helping individuals take their first steps in changing their lives. Kevin is extremely experienced with transformations, helping individuals stay consistent and accountable for their fitness goals. He is willing to take on any client who loves to be challenged and wants to be the best version of themselves. </p>
                        </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Programs