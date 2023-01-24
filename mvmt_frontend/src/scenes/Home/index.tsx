import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageTextWhite from '@/assets/HomePageTextWhite.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
    return (
<section id="home" className="gap-16 py-10 md:h-full md:pb-0 ">
      {/* IMAGE AND MAIN HEADER */} 
      <motion.div 
      className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'> 
          {/* HEADINGS */}
          <motion.div 
          className="md:-mt-20" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{once: true, amount: 0.5}} 
          transition={{duration: 0.5}} 
          variants={{
            hidden: {opacity: 0, x:-50}, 
            visible: {opacity: 1, x:0}
          }}> 
            <div className="relative">
              <div>
                {/* <img alt="home-page-text" src={HomePageTextWhite} /> */}
                <p className='text-4xl font-bold font-bebas tracking-wide' >Your assignment is fitness - </p>
                <p className='text-4xl mx-60 whitespace-nowrap font-bold font-bebas tracking-wide'> Join the MVMT</p>
              </div>
            </div>

            <p className="mt-8 text-sm">
            PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better! Join us now to make fitness part of your everyday lifestyle whether it's one on one training or our small group training, we’ll get you moving.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div 
          className="mt-8 flex items-center gap-8"
          initial="hidden" 
          whileInView="visible" 
          viewport={{once: true, amount: 0.5}} 
          transition={{delay: 0.2, duration: 0.5}} 
          variants={{
            hidden: {opacity: 0, x:-50}, 
            visible: {opacity: 1, x:0}
          }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-white underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10" >
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
    )
}

export default Home