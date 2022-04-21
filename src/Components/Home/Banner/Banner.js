import React from 'react';
import './Banner.css'
import banner from '../../../assets/welcome.png'

const Banner = () => {
    return (
        <section className='container section-width flex'>
            <div className='grid grid-column-2 banner-content'>
                <div className='flex justify-center ml-2'>
                    <div>
                        <h4 className='text-white heading'><span className='highlight'>Chase</span> The New Flavour</h4>
                        <h1 className='banner-header'>The Key To <br /> Fine Dining</h1>
                        <p className='banner-paragraph'>Sit tellus lobortis sed senectus vivamus molestie. <br />
Condimentum volutpat morbi facilisis quam scelerisque <br />
                            sapien. Et, penatibus aliquam amet tellus </p>
                        <button style={{marginTop: '20px'}} className='btn-primary'>Explore Menu</button>
                    </div>
                </div>
                <div className='flex justify-center banner-content'>
                    <img src={banner} alt="" width='80%' />
                </div>
            </div>

        </section>
    );
};

export default Banner;