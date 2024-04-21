import React, { useEffect, useRef } from "react";
import "./testimonial.css";

import {motion,useMotionValue} from "framer-motion"

const features = [
  {
    url: "src/Assets/Cards icon.png",
    title: "Customizable card",
    description:
      "Custom your own card for your exact incomes and expenses needs.",
  },
  {
    url: "src/Assets/Coin icon.png",
    title: "No payment fee",
    description:
      "Transfer your payment all over the world with no payment fee.",
  },
  {
    url: "src/Assets/Purse icon.png",
    title: "All in one place",
    description:
      "The right place to keep your credit and debit cards, boarding passes & more.  ",
  },
];

const Testimonials = () => {
    const variants = {
        initial:{ opacity:0, y:100},
        final:{ opacity:1, y:0, transition:{duration:1,ease:"linear"}}
    }

  return (
    <motion.section
    initial="initial"
    whileInView="final"
    variants={variants}
    viewport={{once:true}}
    className="testimonial">
      <div className="body-wrapper">
        <div className="testimonial-wrapper">

          <section className="section1-testimonial">
            <div className="image-div">
              <img src="src\Assets\Screenshot2.png" alt=""  />
            </div>
          </section>

          <section className="section2-testimonial">
            {features.map((item, i) => (
              <motion.div
              whileHover={{scale:1.02, rotate:1, backgroundColor:"#333333", transition: {duration:0.25}}}
              whileTap={{scale:0.99, rotate:-1}}
              className="three-div" key={i}>
                <img src={item.url} alt="" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </section>

          <section className="section3-testimonials">
            <div className="section3-wrapper">
                <div className="section3-top">
                    <h3>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</h3>
                </div>
                <div className="section3-bottom">
                    <div className="section3-bottom-img-div">
                        <img src="src\Assets\portfolioGirl.jpg" alt=""  />
                    </div>
                    <div className="section3-bottom-content-div">
                        <p>Johnny Owens</p>
                        <div className="star-div">
                            {[1,2,3,4,5].map((item,i) => (
                                <img src="src/Assets/Star.png" alt="" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
