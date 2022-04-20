import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <section>
            <div className='flex justify-center'>
                <div className='text-center newsletter-container'>
                    <h4 className='text-white heading'><span className='highlight-newspaper'>Newsletter</span></h4>
                    <h1 className='small-heading mt-2'>Subscribe to Our Newsletter</h1>
                    <p className='text-white mt-3'>And never miss latest Updates!</p>

                    <form className='mt-3'>
                        <input type="email" className='form-input' placeholder='Email Address' />
                        <input type="submit" className='btn-primary' value="Subscribe" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;