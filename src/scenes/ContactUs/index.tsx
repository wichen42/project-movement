import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function ContactUs({setSelectedPage}: Props) {
    
    const inputStyles = "mb-5 w-full rounded-lg bg-white px-5 py-3 placeholder-black text-primary-500";

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-22">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div 
                className="md:w-3/5"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once: true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{
                    hidden: {opacity: 0, x:-50}, 
                    visible: {opacity: 1, x:0}
                }}>
                    <HText>
                        <span className="text-secondary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugiat libero? Consectetur reiciendis ullam minus? Earum, perspiciatis eligendi maxime aliquid soluta dolor alias quibusdam, sapiente perferendis rerum accusamus reprehenderit fugiat.
                    </p>
                </motion.div>

                {/* Form*/}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once: true, amount: 0.5}} 
                    transition={{duration: 0.5}} 
                    variants={{
                        hidden: {opacity: 0, y:50}, 
                        visible: {opacity: 1, y:0}
                    }}
                    >
                        <form
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                        action="https://formsubmit.co/projectmovementstudio@gmail.com"
                        >
                            <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 30,
                            })}
                            />
                            {errors.name && (
                                <p className="mb-5 text-secondary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "The max length is 30."}
                                </p>
                            )}
                            <input 
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            />
                            {errors.email && (
                                <p className="mb-5 text-secondary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "This field must have a valid email."}
                                </p>
                            )}
                            <input 
                            className={inputStyles}
                            type="text"
                            placeholder="Phone Number"
                            {...register("phone", {
                                required: true,
                            })}
                            />
                            {errors.phone && (
                                <p className="mb-5 text-secondary-500">
                                    {errors.phone.type === "required" && "This field is required."}
                                </p>                
                            )}
                            <div>
                                <select 
                                className={inputStyles}
                                {...register("select", {
                                    required: true,
                                })}
                                >
                                    <option
                                    value=""
                                    disabled
                                    selected
                                    >Which program are you interested in?</option>
                                    <option>Personal Training</option>
                                    <option>Small Group Training</option>
                                </select>
                            </div>
                            {errors.select && (
                                <p className="mb-5 text-secondary-500">
                                    {errors.select.type === "required" && "Please selecte a program."}
                                </p>
                            )}
                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                required: true,
                                maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mb-5 text-secondary-500">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                                </p>
                            )}

                            <button 
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 text-primary-500 px-20 py-3 transition duration-500 hover:text-primary-500 hover:bg-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs;