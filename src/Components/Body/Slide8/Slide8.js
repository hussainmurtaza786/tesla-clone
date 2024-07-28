import React from 'react'
import style from './Slide8.module.css'
function Slide8() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" alt="" />
                    <div className={style.text}>
                        <span> Accessories</span>


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

export default Slide8
