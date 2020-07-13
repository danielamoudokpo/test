import React, { Component } from 'react';
import my from '../assets/pic/park.JPG'
// import my1 from '../assets/pic/6.JPG'
// import my1 from '../assets/pic/9.JPG'
// import my1 from '../assets/pic/12.JPG'
import my1 from '../assets/pic/1.JPG'
// import my1 from '../assets/pic/2.JPG'
// import my1 from '../assets/pic/4.JPG'
// import my1 from '../assets/pic/18.JPG'
// import my1 from '../assets/pic/19.PNG'
 import pdf from '../assets/CV_Amoudokpo_Kokou_Daniel.pdf';
import DownloadLink from "react-download-link";


class AboutMe extends Component {


    render(){
        return(
            <section className=" py-5 aboutme-section " id={'AboutMe-Section'}>

                <div className='containe py-3 '>
                        <h3 className='heading'>
                            About Me
                        </h3>
                    <div className='  row sides'>

                        <div className = 'col-md-5 leftside no-gutters img-fluid'>
                            <img  className = ' img'  src={my}/>
                        </div>

                        <div className='col-md-7 rigthside no-gutters '>
                            <div className='container-fluid'>
                                <div className='column  col-lg-12   '>
                                <h3 className=' py-2 heading1'>
                                            INFO
                                        </h3>
                                    <ul  className='colo'>
                                        <li> Name: kokou Daniel Amoudokpo</li>
                                        {/* <hr/> */}
                                        <li> Email: danielamoudokpo@gmail.com</li>
                                        {/* <hr/> */}
                                        <li> Phone: +33 7 66 52 11 65</li>
                                        {/* <hr/> */}
                                        <li> DoB: 27 October 1999</li>
                                        {/* <hr/> */}
                                        <li> Address : 186 Rue Edouard Tremblay,94400,Vitry-sur-Seine,France. </li>
                                        {/* <hr/> */}
                                        <li> Nationality : Togolese</li>
                                    </ul>
                                </div>
                                        <hr/>

                                <div className='col-lg-8  column'>
                                        <h3 className=' py-2 heading1'>
                                            SKILLS
                                        </h3>
                                    <ul  className='colo'>
                                        <p>HTML/CSS | Bootstrap | Php | JavaScript | React | React Native | NodeJS | MySQL | MongoDB | Laravel | Symfony | StripJs</p>
                                    </ul>

                                    <hr/>
                                    
                                    <h3 className='py-2 heading1'>
                                            Educations
                                        </h3>
                                    <ul  className='colo'>
                                    <p> Paris(12) 2018 - 2019 Supinfo International Campus WEB Developer</p>
                                        <p> New-York(10232)2017- 2018: New World High School- Baccalauréat .</p>  
                                      </ul>

                                      <hr/>

                                    <h3 className='heading1'>
                                            Formations
                                        </h3>
                                        
                                    <ul  className='colo'>
                                      
                                        <p>
                                        Developeur -Web Integretor, EPITECH-SAMSUNG CAMPUS, Saint-Ouen
                                        </p>
                                       
                                    </ul>

                                    <hr/>

                                    <h3 className='heading1'>
                                            EXPERIENCE PROFESSIONAL
                                        </h3>
                                    <ul  className='colo'>
                                        <p>Juillet 2019- Septembre 2019 : Stagiaire en maintenance des outils informatiques à ENSIATE.</p>
                                        <p> Mai 2018 - Aout 2018 : Agent chargé de la gestion des stocks et de carburant de la boutique SPEEDWAY à New York.  
                                        </p>
                                    </ul>
                                    
                                </div>
                                
                                <div className = "App"style={{paddingTop:'48px',paddingLeft:'150px'}}>
                                        <a className='pdf' href = {pdf} target = "_blank" download>Download Full CV<span class="fa ml-2 fa-download"></span> </a>
                                </div>

                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;