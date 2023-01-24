import { TestimonialType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Testimonial from "./Testimonial";

const testimonials: Array<TestimonialType> = [
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
        image: image1,
    },
    {
        title: "Mobility Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
        image: image2,
    },
    // {
    //     title: "Flexibility Training",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
    //     image: image3,
    // },
    // {
    //     title: "Core Training",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
    //     image: image4,
    // },
    // {
    //     title: "Power Training",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
    //     image: image5,
    // },
    // {
    //     title: "Agility Training",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse earum est cum voluptatem asperiores quasi amet odit autem quas nemo doloremque accusantium corporis nihil ad tenetur, incidunt obcaecati aliquam.",
    //     image: image6,
    // },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Testimonials = ({setSelectedPage}: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="testimonials">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}} 
            transition={{delay: 0.2, duration: 0.5}} 
            variants={{
              hidden: {opacity: 0, x:-50}, 
              visible: {opacity: 1, x:0}
            }}
            >
                <div className="md:w-3/5">
                    <HText>TESTIMONIALS</HText>
                    {/* <p className="py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum aut consequatur placeat, eligendi esse voluptate asperiores libero temporibus maxime voluptatibus nihil voluptatem praesentium iste cum magnam sequi, fugit ducimus?
                    </p> */}
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] md:w-11/12 md:mx-20 overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap" >
                    {testimonials.map((item: TestimonialType, index) => (
                        <Testimonial key={`${item.title}-${index}`} title={item.title} description={item.description} image={item.image}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
)
}

export default Testimonials