import './contact.css'
import {Call, Email,LocationOn} from '@mui/icons-material'
import { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from "../../context"

export default function Contact() {

const formRef = useRef();
const [done,setDone] = useState(false)
const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode;

const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_4xxl38h', 
                    'template_35lfjm3', 
                    formRef.current, 
                    '_S8fuQ36_giCTv23F'
                    )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
}

  return (
    <div className="c">
        <div className="cBg"></div>
        <div className="cWrapper">
            <div className="cLeft">
                <h1 className="cTitle">Let's discuss your Project</h1>
                <div className="cInfo">
                    <div className="cInfoItem">
                        <Call className="cIcon"/>
                        <span className="cIconName">+94 702 470 932</span>
                    </div>
                    <div className="cInfoItem">
                        <Email className="cIcon"/>
                        <span className="cIconName">jbrnd21@gmail.com</span>
                    </div>
                    <div className="cInfoItem">
                        <LocationOn className="cIcon"/>
                        <span className="cIconName">No:53, Arippu Road, Old Town, Anuradhapura</span>
                    </div>
                </div>
            </div>
            <div className="cRight">
                <p className="cDesc">
                    <b>What's your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button className="submitBtn">Submit</button>
                    {done && "Thank you !"}
                </form>
            </div>
        </div>
    </div>
  )
}
