import React from 'react'
import './styles/Main.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import man from './assets/man.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hi There!</p>
                            <h1>I AM ANELE MBABELA</h1>
                            <p>Frontend Developer & Data Geek</p>

                            <div className="icons">
                                <TwitterIcon className="icon"/>
                                <InstagramIcon className="icon"/>
                                <FacebookIcon className="icon"/>
                                <LinkedInIcon className="icon"/>                           
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        <button>Hire Me</button>
                    </div>

                    </div>


            </div>


            <div className="main__img">
                <img src={man} alt="" />
            </div>


        </div>



    </div>
)
}


export default Main