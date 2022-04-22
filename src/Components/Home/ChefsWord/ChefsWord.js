import React from 'react';
import './ChefsWord.css';
import chef from '../../../assets/chef.png';
import sign from '../../../assets/sign.png';
import video from '../../../assets/Video.png'
import quote from '../../../assets/quote.png'

const ChefsWord = () => {
    return (
        <>
            <section style={{ paddingTop: '50px' }}>
                <div className='img-bg'>
                    <div style={{ padding: '10% 0' }} className=' ml-2 grid grid-column-2 container'>
                        <div className='flex justify-center'>
                            <img src={chef} alt="" width='70%' />
                        </div>
                        <div className='flex justify-center'>
                            <div>
                                <h4 className='text-white heading'><span className='highlight-chef'>Chef's</span> Word</h4>
                                <h1 className='banner-header'>What we believe in</h1>
                                <p style={{ marginTop: '40px', lineHeight: '28px' }}><img src={quote} alt="" width='30px' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
                                    scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
                                    Congue iaculis integer curabitur semper sit nunc.</p>
                                <h1 style={{ marginTop: '40px' }}>Kevin Luo</h1>
                                <p>Chef & Founder</p>
                                <img style={{ marginTop: '30px' }} src={sign} alt="" width='25%' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className='video-img'>
                <img src={video} alt="" width='100%' />
            </div>
        </>
    );
};

export default ChefsWord;