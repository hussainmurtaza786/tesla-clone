import React from 'react'
import style from './Slide5.module.css'
function Slide5() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop" alt="" />
                    <div className={style.text}>
                        <span> Solar Panels</span> <br />
                        <span> Schedule a Virtual Consultation
                            <div className={style.line}></div>
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

export default Slide5
