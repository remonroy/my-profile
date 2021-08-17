import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    AOS.init();
    // data-aos="fade-right"
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_tk63g2d', 'template_dntdc0t', e.target, 'user_KKYRpgoZqjlDBsuyrLSSE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div id="contact" className="background">
            <div className="row">
                <h1  style={{color:"#ddd",textAlign:'center'}}>Contact us</h1>
                <div className="col-md-3"></div>
                <div data-aos="zoom-in" className="col-md-6">
                    <form onSubmit={sendEmail}>
                        <input className="form-control mb-3" type="text" placeholder="Enter name *" name="name" id=""/>
                        <input className="form-control" type="email" placeholder="Enter Email *" name="email" id=""/>
                        <input  className="mt-3 mb-3 form-control" placeholder="Enter subject *"  type="text" name="subject" id=""/>
                        <textarea className="form-control mb-3" placeholder="Enter your message *" name="message" id="" cols="10" rows="5"></textarea>
                        <div className="text-center">
                        <input type="submit" value="Send message" className="btn btn-info" />
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
                
            </div>
        </div>
    );
};

export default Contact;