import React from 'react'
import style from './Slide7.module.css'
function Slide7() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg" alt="" />
                    <div className={style.text}>
                        <span> Power wall</span> 
                        

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

export default Slide7
