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
                        <h1 className='small-heading mt-1'>Today's Special</h1>
                    </div>
                </div>
                <div className='grid grid-column-3 section-divider'>
                    <div className='flex justify-center mx'>
                        <div>
                            <h2 className='text-white meal-header text-center'>Wine & Beer</h2>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Chapel Hill Shiraz</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$56</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>AU | Bottle</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Catena Malbec</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$19</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>AU | Bottle</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>La Vieille Rosé</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$44</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>FR | 750ml</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Rhino Pale Ale</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$31</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>CA | Bottle</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Irish Guinness</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$26</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>IE | Bottle</p>
                            </div>
                        </div>
                    </div>

                    <div className='menu-img flex justify-center'>
                        <img src={menu} alt="" width='80%' />
                    </div>
                    <div className='flex justify-center mx'>
                        <div>
                            <h2 className='text-white meal-header text-center'>Cocktails</h2>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Aperol Spritz</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$20</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Dark 'N' Stormy</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$16</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>Dark rum | Ginger beer | Slice of lime. </p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Daiquiri</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$10</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>Rum | Citrus juice | Sugar</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Old Fashioned</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div>
                                        <h1 className='text-white open-sans'>$31</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>Bourbon | Brown sugar | Angostura Bitters</p>
                            </div>
                            <div className='meals'>
                                <div className='menu-flex'>
                                    <div className='meal-name'>
                                        <h1>Negroni</h1>
                                    </div>
                                    <div className='menu-dash'></div>
                                    <div className='text-right'>
                                        <h1 className='text-white open-sans '>$26</h1>
                                    </div>
                                </div>
                                <p style={{ paddingTop: '10px' }}>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ marginTop: '20px' }} className='text-center'>
                <button className='btn-primary'>View More</button>
            </div>

        </section>
    );
};

export default Menu;