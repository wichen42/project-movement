import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Location({ setSelectedPage }: Props) {
  return (
    <section id="location" className="pb-40 mx-auto md:px-0 px-20 flex md:w-5/6">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Location)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    >
        <motion.div 
      className="mt-16 items-center justify-between gap-10 md:mt-28 md:flex">
        {/* Description */}
        <div>
          {/* Title */}
          <div className="relative">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  <span className="text-secondary-500">LOCATION</span>
                </HText>
              </motion.div>
            </div>
          </div>
          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius provident veritatis totam, perspiciatis possimus consequuntur. Neque delectus et quidem harum quis dolores nobis illo cumque expedita illum. Excepturi, inventore corporis.</p>
            <p className="mt-5">261 West 35th St</p>
            <p>Suite 801</p>
            <p className="pb-20">New York, NY 10001</p>
            <HText>DIRECTIONS</HText>
            <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. A non iste officia dolores optio veniam, eum commodi facilis voluptatibus, minima recusandae tempora aut, voluptate nobis facere adipisci rerum tempore perferendis.</p>
          </motion.div>
        </div>

        {/* Google Map*/}
        {/* <div className="pt-20">
            <Iframe
            width="650"
            height="500"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm9ZNtq1ZwokRz2gaxosrnps&key=AIzaSyA_DIinwjL2Ra5-PGz8IZUPYE5loJvzD9s"
            ></Iframe>
        </div> */}

      </motion.div>
    </motion.div>
      
    </section>
  );
}

export default Location;
