/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Home.css'
import Back from './Home.gif'

function Home (){
    return (
        <React.Fragment>
            <div className="div1" id='Home' style={{ 
                backgroundImage: `url(${Back})` 
            }}>
                <div className='p1'>Hello</div>
            {/* <div>
               <p className='text1'>Hi,<br/>I am Aparna Udayakumar<br/>Web Developer  </p>
            /div> */}
           
            </div>
        </React.Fragment>
    )

}

export default Home;