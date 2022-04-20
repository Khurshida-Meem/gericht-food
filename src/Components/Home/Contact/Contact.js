import React from 'react';
import './Contact.css';
import find from '../../../assets/findus.png'

const Contact = () => {
    return (
        <section className='img-bg section-divider'>
            <div style={{ paddingTop: '5%' }} className='container'>
                <div className='grid grid-column-2'>
                    <div className='flex justify-center'>
                        <div>
                            <h4 className='text-white heading'><span className='highlight-chef'>Contact</span></h4>
                            <h1 className='banner-header'>Find Us</h1>

                            <p style={{ marginTop: '30px' }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                            <h3 style={{ marginTop: '20px' }}>Opening Hours</h3>
                            <p className='text-white mt-1'>Mon Fri: 10:00 am 02:00 am</p>
                            <p className='text-white mt-1'>Sat Sun: 10:00 am 03:00 am</p>
                            <button className='btn-primary mt-3'>Visit Us</button>
                        </div>

                    </div>
                    <div>
                        <img src={find} alt="" width='75%' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;