import React from 'react'
import style from './Slide2.module.css'
function Slide2() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-v2.jpg" alt="" />
                    <div className={style.text}>
                        <span> Model X</span> <br />
                        <span> From $65,9904 <br />
                            After $14,000 Est. Savings
                            <div className={style.line}></div>
                        </span>

                    </div>
                    <div className={style.button}>
                        <button>Order Now</button>
                        <button>Demo Drive</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slide2
