import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div>
            <h1>Fell Free To Contact Us</h1>
            <div className="img">
                {/* <img src={process.env.PUBLIC_URL + '/images/CONTACT.jpg'} alt="Valentine" className='image1'></img> */}
                 </div>
            <section className="contact">
                <div className="contact-title">
                <h2>Contact Us</h2>
    
                        <p>BOOK REVIEW</p>
                        <p>Northermbaland, UK</p>
                        <p>Phone:0157537838</p>
                        <p>contact@bookreview.com</p>
                </div>
                <div className="contact-pages">
                    <div>
                        <p>Let us know what you think! Share your feedback with us about our website, our products, our business, or anything else that comes to mind. We are happy to answer any questions you have about our products and services, and we welcome all your questions, comments and suggestions.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact