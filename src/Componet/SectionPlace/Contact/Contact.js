import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    AOS.init();

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
        <section id="contact" className="bakcground">
        <div className=" text text-center  mt-5 mb-5">
            <p data-aos="fade-left" className="contact">Contact us</p>
            <h1 data-aos="fade-right" style={{color:"#ddd"}}>Contact with me</h1>
        </div>
       
        <div data-aos="zoom-in" className="row text-center">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={sendEmail}>
                    <input className="form-control mb-3" type="text" placeholder="Enter name *" name="name" id=""/>
                    <input className="form-control" type="email" placeholder="Enter Email *" name="email" id=""/>
                    <input  className="mt-3 mb-3 form-control" placeholder="Enter subject *"  type="text" name="subject" id=""/>
                    <textarea className="form-control mb-3" placeholder="Enter your message *" name="message" id="" cols="10" rows="5"></textarea>
                    <input type="submit" value="Send message" className="btn btn-info" />
            
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
        
        
    </section>
    );
};

export default Contact;