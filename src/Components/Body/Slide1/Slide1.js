import React from 'react'
import style from './Slide1.module.css'
function Slide1() {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" alt="" />

                <div className={style.text}>
                    <span> Model Y</span> <br />
                    <span> 1.99% APR Financing Ending August 31
                        <div className={style.line}></div>
                        From $31,4903</span>

                </div>
                <div className={style.button}>
                    <button>Order Now</button>
                    <button>Demo Drive</button>
                </div>

            </div>
        </div>
    )
}

export default Slide1
