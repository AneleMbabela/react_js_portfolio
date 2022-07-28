import React from 'react'
import './styles/Section.scss'
import man2 from './assets/man2.PNG'
import { ArrowBack } from '@mui/icons-material/'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
      <div className='section'>
        <Link to='/'>
            <ArrowBack className='arrow'/>
        </Link>

            <div className='section__container'>
            


                    <div className='section__img'>
                        <img src={man2} alt="" />
                    </div>


                    <div className="section__content">
                    <h1>Who is Anele?</h1>
                    <p>3 years experience in Coding</p>
                    <p>2 years of Web Development</p>
                    <p>Data  Analyst</p>
                    <p>Python Coding</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section