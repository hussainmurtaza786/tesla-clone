import React from 'react'
import Slide1 from './Slide1/Slide1'
import Slide2 from './Slide2/Slide2'
import style from './Body.module.css'
import Slide3 from './Slide3/Slide3'
import Slide4 from './Slide4/Slide4'
import Slide5 from './Slide5/Slide5'
import Slide6 from './Slide6.js/Slide6'
import Slide7 from './Slide7/Slide7'
import Slide8 from './Slide8/Slide8'
import Footer from '../Footer/Footer'

function Body() {
    return (
        <div className={style.container}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
            <Footer />
        </div>
    )
}

export default Body
