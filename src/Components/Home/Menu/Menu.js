import React from 'react';
import './Menu.css'
import menu from '../../../assets/menu.png'

const Menu = () => {
    return (
        <section className='container'>
            <div className='section-divider'>
                <div>
                    <div className='text-center'>
                        <h4 className='text-white heading'>Menu That <span className='highlight'>Fits</span> Your Palatte</h4>
                        <h1 className='small-heading'>Today's Special</h1>
                    </div>
                </div>
                <div className='grid grid-column-3 section-divider'>
                    <div className='flex justify-center'>
                        <div>
                            <h2 className='text-white meal-header text-center'>Wine & Beer</h2>
                            <div className='meals'>
                                <h1>Chapel Hill Shiraz ---- <span className='text-white open-sans'>$56</span> </h1>
                                <p style={{ paddingTop: '10px' }}>AU | Bottle</p>
                            </div>
                            <div className='meals'>
                                <h1>Catena Malbec ---- <span className='text-white open-sans'>$19</span> </h1>
                                <p style={{ paddingTop: '10px' }}>AU | Bottle</p>
                            </div>
                            <div className='meals'>
                                <h1>La Vieille Rosé ---- <span className='text-white open-sans'>$44</span> </h1>
                                <p style={{ paddingTop: '10px' }}>FR | 750ml</p>
                            </div>
                            <div className='meals'>
                                <h1>Rhino Pale Ale  ---- <span className='text-white open-sans'>$31</span> </h1>
                                <p style={{ paddingTop: '10px' }}>CA | Bottle</p>
                            </div>
                            <div className='meals'>
                                <h1>Irish Guinness ---- <span className='text-white open-sans'>$26</span> </h1>
                                <p style={{ paddingTop: '10px' }}>IE | Bottle</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={menu} alt="" width='80%' />
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <h2 className='text-white meal-header text-center'>Cocktails</h2>
                            <div className='meals'>
                                <h1>Aperol Spritz ---- <span className='text-white open-sans'>$20</span> </h1>
                                <p style={{ paddingTop: '10px' }}>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                            </div>
                            <div className='meals'>
                                <h1>Dark 'N' Stormy ---- <span className='text-white open-sans'>$16</span> </h1>
                                <p style={{ paddingTop: '10px' }}>Dark rum | Ginger beer | Slice of lime. </p>
                            </div>
                            <div className='meals'>
                                <h1>Daiquiri ---- <span className='text-white open-sans'>$10</span> </h1>
                                <p style={{ paddingTop: '10px' }}>Rum | Citrus juice | Sugar</p>
                            </div>
                            <div className='meals'>
                                <h1>Old Fashioned  ---- <span className='text-white open-sans'>$31</span> </h1>
                                <p style={{ paddingTop: '10px' }}>Bourbon | Brown sugar | Angostura Bitters</p>
                            </div>
                            <div className='meals'>
                                <h1>Negroni ---- <span className='text-white open-sans'>$26</span> </h1>
                                <p style={{ paddingTop: '10px' }}>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{marginTop: '20px'}} className='text-center'>
                <button className='btn-primary'>View More</button>
            </div>
        
        </section>
    );
};

export default Menu;