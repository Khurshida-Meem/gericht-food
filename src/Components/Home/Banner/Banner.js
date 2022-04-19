import React from 'react';
import './Banner.css'
import banner from '../../../assets/welcome.png'

const Banner = () => {
    return (
        <section className='section-divider'>
            <div className='grid grid-column-2'>
                <div className='flex justify-center'>
                    <div>
                        <h4 className='text-white heading'><span className='highlight'>Chase</span> The New Flavour</h4>
                        <h1 className='banner-header'>The Key To <br /> Fine Dining</h1>
                        <p className='banner-paragraph'>Sit tellus lobortis sed senectus vivamus molestie. <br />
Condimentum volutpat morbi facilisis quam scelerisque <br />
                            sapien. Et, penatibus aliquam amet tellus </p>
                        <button style={{marginTop: '20px'}} className='btn-primary'>Explore Menu</button>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="" width='75%' />
                </div>
            </div>

        </section>
    );
};

export default Banner;