import React from 'react';
import './Instagram.css'

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
                        <div className='background img-1'>
                            <div className='overlay'>
                                <div className='text-center'>
                                    <p style={{ fontSize: '40px', paddingTop: '55%' }}><i className="fa fa-instagram" aria-hidden="true"></i></p>
                                </div>

                            </div>
                        </div>
                        <div className='background img-2'>
                            <div className='overlay'>
                                <div className='text-center'>
                                    <p style={{ fontSize: '40px', paddingTop: '55%' }}><i className="fa fa-instagram" aria-hidden="true"></i></p>
                                </div>

                            </div>
                        </div>
                        <div className='background img-3'>
                            <div className='overlay'>
                                <div className='text-center'>
                                    <p style={{ fontSize: '40px', paddingTop: '55%' }}><i className="fa fa-instagram" aria-hidden="true"></i></p>
                                </div>

                            </div>
                        </div>
                        <div className='background img-4'>
                            <div className='overlay'>
                                <div className='text-center'>
                                    <p style={{ fontSize: '40px', paddingTop: '55%' }}><i className="fa fa-instagram" aria-hidden="true"></i></p>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instagram;