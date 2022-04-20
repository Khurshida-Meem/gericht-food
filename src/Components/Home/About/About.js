import React from 'react';
import './About.css'
import knife from '../../../assets/knife.png'

const About = () => {
    return (
        <section className='img-bg'>
            <div className='container flex'>
                <div className='flex g-bg'>
                    <div className='about-container'>
                        <h1 className='small-heading'>About <span className='highlight-about'>Us</span></h1>
                        <p style={{marginTop: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis <br />
                            pharetra adipiscing ultrices vulputate posuere tristique. In sed <br />
                            odio nec aliquet eu proin mauris et.</p>
                        <button style={{ marginTop: '20px' }} className='btn-primary'>Know More</button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={knife} alt="" width='40%' />
                    </div>
                    <div>
                        <h1 className='small-heading'><span className='highlight-history'>Our</span> History</h1>
                        <p style={{marginTop: '30px'}}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. <br />
                            Risus placerat morbi volutpat habitasse interdum mi aliquam In <br />
                            sed odio nec aliquet.</p>
                        <button style={{ marginTop: '20px' }} className='btn-primary'>Know More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;