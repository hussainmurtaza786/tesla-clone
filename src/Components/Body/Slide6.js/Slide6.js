import React from 'react'
import style from './Slide6.module.css'
function Slide6() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global" alt="" />
                    <div className={style.text}>
                        <span> Solar Roof</span> <br />
                        <span>Produce Clean Energy From Your Roof
                        </span>

                    </div>
                    <div className={style.button}>
                        <button>Order Now</button>
                        <button>Learn More</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slide6
