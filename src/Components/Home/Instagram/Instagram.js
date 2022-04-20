import React from 'react';
import './Instagram.css'
import img1 from '../../../assets/gallery01.png'
import img2 from '../../../assets/gallery02.png'
import img3 from '../../../assets/gallery03.png'
import img4 from '../../../assets/gallery04.png'

const Instagram = () => {
    return (
        <section className='section-divider'>
            <div>
                <div className='flex'>
                    <div className='instagram-content'>
                        <h4 className='text-white heading'><span className='highlight-chef'>Instagram</span></h4>
                        <h1 className='banner-header instagram-heading'>Photo Gallery</h1>
                        <small style={{ marginTop: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Volutpat mattis ipsum turpis elit elit scelerisque egestas mu</small>
                        <br />
                        <button style={{ marginTop: '20px' }} className='btn-small'>View More</button>
                    </div>
                    <div className='flex'>
                        <div className='overlay'>
                            <img src={img1} className='img-margin' alt="" height='280px' />
                        </div>
                        <div className='overlay'>
                            <img src={img2} className='img-margin' alt="" height='280px' />
                        </div>
                        <div className='overlay'>
                            <img src={img3} className='img-margin' alt="" height='280px' />
                        </div>
                        <div className='overlay'>
                            <img src={img4} className='img-margin' alt="" height='280px' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instagram;