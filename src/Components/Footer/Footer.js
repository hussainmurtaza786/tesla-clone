import React from 'react'
import Style from './Footer.module.css'
function Footer() {
    return (
        <div className={Style.container} >
            <div className={Style.txt}>

                <span >1 $7,500 Federal Tax Credit available for
                    eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel <br /> Drive not eligible.
                </span>
            </div>
            <br />
            <div className={Style.txt}>

                <span>
                    2 Price before estimated savings is $42,490, excluding taxes and fees.
                    Subject to change. <br /> Estimated savings includes $5,000 in gas savings estimated
                    over five years,
                    the $7,500 Federal Tax Credit and state <br />incentives,
                    available to eligible buyers and subject to MSRP caps. Terms apply.
                </span>
            </div >
            <br />
            <div className={Style.txt}>

                <span>
                    3 Price before estimated savings is $44,990, excluding taxes and fees. Subject to change.
                    Estimated <br />savings includes $6,000 in gas savings estimated over five years, the $7,500
                    Federal Tax Credit and state <br /> incentives, available to eligible buyers and subject to MSRP caps.
                    Terms apply.
                </span>
            </div>
            <br />
            <div className={Style.txt}>

                <span>
                    incentives, available to eligible buyers and subject to MSRP caps. Terms apply.

                    4 Price before estimated savings is $79,990, excluding taxes and fees. Subject to change.
                    Estimated <br /> savings includes $6,500 in gas savings estimated over five years, the $7,500 Federal
                    Tax Credit and state <br /> incentives, available to eligible buyers and subject to MSRP caps. Terms apply.
                </span>
            </div>
            <br />
            <div className={Style.txt}>

                <span>
                    5 Price before estimated savings is $74,990, excluding taxes and fees. Subject to change. Estimated <br />
                    savings includes $6,500 in gas savings estimated over five years and state incentives, available to eligible <br />
                    buyers and subject to MSRP caps. Terms apply.
                </span>
            </div>
            <div className={Style.footer}>
                <span>Tesla © 2024</span>
                <span>Privacy & Legal</span>
                <span>Vehicle Recalls </span>
                <span> Contact </span>
                <span> News </span>
                <span> Get Updates </span>
                <span> Locations </span>
            </div>
        </div>

    )
}

export default Footer
