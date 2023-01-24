import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Policy from "./Benefit";
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

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis porro sint. Eligendi similique, nostrum incidunt adipisci, totam assumenda, sunt eaque molestiae omnis deserunt reprehenderit dolore soluta expedita magnam! Blanditiis?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Hundreds of Diverse Training Plans",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis porro sint. Eligendi similique, nostrum incidunt adipisci, totam assumenda, sunt eaque molestiae omnis deserunt reprehenderit dolore soluta expedita magnam! Blanditiis?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis porro sint. Eligendi similique, nostrum incidunt adipisci, totam assumenda, sunt eaque molestiae omnis deserunt reprehenderit dolore soluta expedita magnam! Blanditiis?"
    }
]

const Benefits = ({setSelectedPage}: Props) => {

  return (
    <section id="benefits"
    className="mx-auto min-h:full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis aliquid cumque eaque perspiciatis exercitationem repellat ut adipisci sunt saepe, incidunt, mollitia necessitatibus labore aperiam fugit, totam voluptatibus itaque vero.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((policy: BenefitType) => (
                    <Policy key={policy.title} icon={policy.icon} title={policy.title} description={policy.description} setSelectedPage={setSelectedPage}/>
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
                        <div>
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
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit officiis alias a omnis, doloremque repellat tempora temporibus voluptatum libero sed. Atque debitis exercitationem libero dignissimos tempore vel laborum doloribus.</p>
                            <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum dolorem autem voluptas, fugit sequi minus temporibus inventore quasi nemo! Nulla repellat exercitationem est dolorem consequuntur provident nesciunt vitae nam!</p>
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

export default Benefits