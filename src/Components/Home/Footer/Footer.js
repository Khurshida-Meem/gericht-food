import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className='img-bg footer'>
            <div style={{paddingTop: '10%'}} className='container flex justify-evenly'>
                <div className='text-center footer-column'>
                    <h1>Contact Us</h1>
                    <p className='mt-2'><small>9 W 53rd St, New York, NY 10019, USA</small></p>
                    <p className='mt-1'><small>+1 212-344-1230</small></p>
                    <p><small>+1 212-555-1230</small></p>
                </div>
                <div className='text-center footer-column'>
                    <h1 className='footer-logo'>GERICHT</h1>
                    <p className='text-white mt-3'><small> "The best way to find yourself is to lose yourself in the <br />
                        service of others."</small></p>
                    <p className='mt-2'><i className="fa fa-facebook" aria-hidden="true"></i> <i className="fa fa-twitter" aria-hidden="true"></i> <i className="fa fa-instagram" aria-hidden="true"></i></p>
                </div>
                <div className='text-center footer-column'>
                    <h1>Working Hours</h1>
                    <p className='mt-2'><small>Monday-Friday:</small></p>
                    <p><small>08:00 am -12:00 am</small></p>
                    <p className='mt-1'><small>Saturday-Sunday:</small></p>
                    <p><small>07:00am -11:00 pm</small></p>
                </div>
            </div>
            <p className='text-center copyright'><small>2021 Gerícht. All Rights reserved.</small></p>
        </section>
    );
};

export default Footer;