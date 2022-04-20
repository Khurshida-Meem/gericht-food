import React from 'react';
import './Award.css';
import award1 from '../../../assets/award01.png'
import award2 from '../../../assets/award02.png'
import award3 from '../../../assets/award03.png'
import award4 from '../../../assets/award05.png'
import laurels from '../../../assets/laurels.png'

const Awards = () => {
    return (
        <section className='img-bg '>
            <div style={{ paddingTop: '5%' }} className='container grid grid-column-2'>
                <div className='flex'>
                    <div>
                        <div>
                            <h4 className='text-white heading'><span className='highlight-chef'>Awards</span> Awards & recognition</h4>
                            <h1 className='banner-header'>Our Laurels</h1>
                        </div>
                        <div>
                            <div className='grid grid-column-2 section-divider'>
                                <div className='flex'>
                                    <img src={award2} alt="" width='20%' />
                                    <div style={{ marginLeft: '1rem' }}>
                                        <h3>Bib Gourmond</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur.</small>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img src={award1} alt="" width='20%' />
                                    <div style={{ marginLeft: '1rem' }}>
                                        <h3>Rising Star</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur.</small>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-column-2 section-divider'>
                                <div className='flex'>
                                    <img src={award4} alt="" width='20%' />
                                    <div style={{ marginLeft: '1rem' }}>
                                        <h3>AA Hospitality</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur.</small>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img src={award3} alt="" width='20%' />
                                    <div style={{ marginLeft: '1rem' }}>
                                        <h3>Outstanding Chef</h3>
                                        <small>Lorem ipsum dolor sit amet, consectetur.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={laurels} alt="" width='70%' />
                </div>
            </div>

        </section>
    );
};

export default Awards;