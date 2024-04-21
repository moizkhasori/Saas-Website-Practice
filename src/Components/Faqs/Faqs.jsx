import React from 'react'
import "./faqs.css"
import {motion} from "framer-motion"

const Faqs = () => {

    const leftVariants = {
        initial:{
            x:-100
        },
        final:{
            x:0,
            transition:{
                duration:0.5,
                ease:"linear"
            }
        }
    }
    const rightVariants = {
        initial:{
            x:100
        },
        final:{
            x:0,
            transition:{
                duration:0.5,
                ease:"linear"
            }
        }
    }

  return (
    <motion.div className='faqs' initial="initial" whileInView="final" viewport={{ once:true}}>
        <div className="body-wrapper">
            <div className="faq-wrapper">

                <motion.div variants={leftVariants} className="faq-left">
                    <h1> Questions?<br />Let's talk </h1>
                    <p>Contact us through our 24/7 live chat. We're always happy to help!</p>
                    <button >Get Started</button>
                </motion.div>

                <motion.div variants={rightVariants} className="faq-right">
                    <img src="src\Assets\questions.png" alt="" />
                </motion.div>
 
            </div>
        </div>
    </motion.div>
  )
}

export default Faqs