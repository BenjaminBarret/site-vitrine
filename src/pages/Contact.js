import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import CopyToClipboard from "react-copy-to-clipboard";
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';

const Contact = () => {

  const variants = {
    visible : {
      opacity: 1,
      x: 0
    },
    exit : {
      opacity: 0,
      x: 300
    }
  }

  const transition = {
    ease : [0.03, 0.87, 0.73, 0.9],
    duration: 0.6
  };

  return (
    <main>
      <Mouse />
      <motion.div 
        className="contact"
        initail="exit"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm/>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>47, chemin des <br></br>andréanums</p>
              <p>97430 Le Tampon</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0693206433" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 93 20 64 33
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="bbarret.dev@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  bbarret.dev@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork/>
          <div className="credits">
            <p>Benjamin Barret - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'}/>
      </motion.div>
    </main>
  );
};

export default Contact;
