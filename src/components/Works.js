import React from 'react';
import { ArrowBack } from '@mui/icons-material/';
import { Link } from 'react-router-dom';


import react from './assets/react.jpg'
import ui from './assets/ui.jpg'
import wd from './assets/wd.jpg'
import wd2 from './assets/wd2.jpg'
import wd3 from './assets/wd3.jpg'
import wd4 from './assets/wd4.jpg'
import './styles/Works.scss'

const Works = () => {
    return (
        <div className='works'>
            <Link to='/'>
            <ArrowBack className='arrow'/>
            </Link>

            <div className="work__section">

                <div className="cards">
                    <img src={react} alt="" />
                    <button>3D-Navigation Bar.</button>
                    <a href="https://anelembabela.github.io/3D-Navigation-Bar/"></a>
                </div>

                <div className="cards">
                    <img src={ui} alt="" />
                    <button>Frontend Movie Streaming App.</button>
                    <a href="https://anelembabela.github.io/Movie-streaming-app/"></a>
                </div>

                <div className="cards">
                    <img src={wd} alt="" />
                    <button>Language translator App.</button>
                        <a href="https://anelembabela.github.io/Language-translator-app/"></a>
                </div>

                <div className="cards">
                    <img src={wd2} alt="" />
                    <button>React Game: Tic-Tac-Toe.</button>
                    <a href="https://anelembabela.github.io/react_tic_tac_toe/"></a>
                </div>

                <div className="cards">
                    <img src={wd3} alt="" />
                    <button>Frontend: Product Landing Page.</button>
                    <a href="https://anelembabela.github.io/Frontend-Landing-Page/"></a>
                </div>

                <div className="cards">
                    <img src={wd4} alt="" />
                    <button>Text to Speech App.</button>
                    <a href="https://anelembabela.github.io/Text-to-speech-app/"></a>
                </div>

                <div className="cards">
                    <img src={ui} alt="" />
                    <button>Contact Form.</button>
                    <a href="https://anelembabela.github.io/Contact-form-a/"></a>
                </div>

                <div className="cards">
                    <img src={wd3} alt="" />
                    <button>Movie Streaming App.</button>
                    <a href="https://anelembabela.github.io/Movie-streaming-app/"></a>
                </div>

            </div> 

        </div>
    )
}

export default  Works