
import React, { Component ,useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card, CardLink, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import ModalImage from "react-modal-image";


import laravelLogo from "../assets/laravel.jpeg";
import reactLogo from "../assets/react.png";
import symfonyLogo from "../assets/symfony.png";
import snp from '../assets/snp.png';
import cht from '../assets/chatt.jpeg';
import es from '../assets/e-s.png';
import ec from '../assets/ec.jpeg'
import sh from '../assets/shoes.jpg'
import qz from '../assets/qz.webp'
import qz1 from '../assets/qz1.png'
import qz3 from '../assets/qz3.png'

import ad from '../assets/ad.png'
import ad2 from '../assets/ads2.png'

import sp from '../assets/sp.png'



// import myCard from '../coponemts/json/cards'
    
const reactModal =[

    {
    mHeader: 'SNAP',
    mBody: 'this my_snap'
},

    {
    mHeader: 'IRC',
    mBody: 'this my_irc'
}

]
 
class Projects extends Component {

    constructor(props){
        super(props);
       
        this.state ={
            modal: false,
            modalInfo:{},
            reqIndex : 0,
            classNames : '',
            buttonLabel : '',
            mheader :'',
            mBody: '',

        }
    }

    render(){
        return(
            
            <section className="projects-section py-5 " id={'Projects-Section'} style={{ }}>
            
                <div class="container py-3 text-white">
                    <h3 class="heading text-white ">Mes Projets</h3>
                    <div class="row exp-grids">
                        <div class="col-md-3 exp">
                            <h4>E-Studio</h4>
                            <ModalImage 
                                    small={ec}
                                    large={es}
                                    alt="Hello World!"
                                    />
                            <h5> Crée avec: React_Laravel</h5>
                            <a href='https://gitlab.com/e-studio1'><button className='btn btn-primary'> Lien GitHub </button></a>

                        </div>
                        <div style={{fontSize:'170%',fontWeight:'450',paddingTop:'70px'}}class="col-md-9 mt-md-0 mt-4">
                            <p>Service de mise en relation pour louer des studios d'enregistrement</p>
                        </div>
                    </div>
                    <div class="row exp-grid1 mt-5">
                        <div style={{fontSize:'170%',fontWeight:'450',paddingTop:'70px'}} class="col-md-9 mb-md-0 mb-4">
                            <p>Application mobile basée sur le modèle de Snapchat.</p>

                        </div>
                        <div class="col-md-3 exp1">
                            <h4>My_Snapchat</h4>
                            <ModalImage 
                                    small={snp}
                                    large={sp}
                                    alt="Hello World!"
                                    />
                            <h5>Crée avec: React Native</h5>
                            <a href='https://github.com/danielamoudokpo/my_snapchat'><button className='btn btn-primary'> Lien GitHub </button></a>
                        </div>
                    </div>
                    <div class="row exp-grids mt-5">
                        <div class="col-md-3 exp">
                            <h4>Free_Ads</h4>
                            <ModalImage 
                                    small={sh}
                                    large={ad}
                                    alt="Hello World!"
                                    />
                            <h5>Crée avec: Laravel</h5>
                            <a href='https://github.com/danielamoudokpo/MVC_Free_Ads'><button className='btn btn-primary'> Lien GitHub </button></a>
                        </div>
                        <div style={{fontSize:'170%',fontWeight:'450',paddingTop:'70px'}} class="col-md-9 mt-md-0 mt-4">
                            <p>Création d'un site web basé sur le modèle de Leboncoin</p>
                        </div>
                    </div>
                    <div class="row exp-grid1 mt-5">
                        <div style={{fontSize:'170%',fontWeight:'450',paddingTop:'70px'}}class="col-md-9 mb-md-0 mb-4 ">
                            <p> Création d'un site pour des Quiz</p>
                        </div>
                        <div class="col-md-3 exp1">
                            <h4>My_Quiz</h4>
                            <ModalImage 
                                    small={qz}
                                    large={qz1}
                                    alt="Hello World!"
                                    />
                            <h5>Crée avec: Symfony</h5>
                            <a href='https://github.com/danielamoudokpo/MVC_My_Quiz'><button className='btn btn-primary'> Lien GitHub </button></a>
                        </div>
                    </div>
                </div>

                {/* <div className='row '>
                    <div className='container-fluid py-5 do '>
                        <div className ='   col-md-f4'>
                                <ModalImage 
                                    small={snp}
                                    large={es}
                                    alt="Hello World!"
                                    />
                        </div>
                        <div className ='  col-md-f4 text-white'>
                                <h3>snap chat</h3>
                                <p>this is ...</p>
                        </div>
                        <div className =' col-md-f4'>
                                <ModalImage 
                                    small={snp}
                                    large={es}
                                    alt="Hello World!"
                                    />
                        </div>
                        <div className =' col-md-f4 text-white'>
                                <h3>snap chat</h3>
                                <p>this is ...</p>
                        </div>
                        
                    </div>
                </div>

                <div className='row'>
                    <div className='container-fluid py-5  '>
                        <div className =' col-md-4'>
                                <ModalImage 
                                    small={snp}
                                    large={es}
                                    alt="Hello World!"
                                    />
                        </div>
                        <div className =' col-md-4 text-white'>
                                <h3>snap chat</h3>
                                <p>this is ...</p>
                        </div>
                    </div>
                    
                </div> */}
                
                
                
            </section>

            
        )
    }

    // const closeLightbox = () => {
    //     this.state.open = true;
    //   };
       
    //   // ...
       
    //   {
    //     this.state.open && (
    //       <Lightbox
    //         medium={urlToLargeImageFile}
    //         large={urlToHugeImageFile}
    //         alt="Hello World!"
    //         onClose={this.closeLightbox}
    //       />
    //     );
    //   }



   

}   
    
   
    



  

export default Projects;






const reactCard =[

    { 
    image : snp,
    title:'my_snapchat',
    text:'too nice',
    gitLink :'https://github.com/danielamoudokpo/my_snapchat'
},

    {
    image : cht,
    title:'my_irc',
    text:'exelente',
    gitLink : 'https://github.com/danielamoudokpo/my_irc'
},

]

const laravelCard =[

    { 
    image :laravelLogo,
    title:'FreeAds', 
    text:'nice',
    gitLink:'https://github.com/danielamoudokpo/MVC_Free_Ads'
},

    { 
    image : es,
    title:'E-Studio', 
    text:'excelente',
    gitLink:'https://gitlab.com/e-studio1',
},


]

const symfonyCard =[

    {
    image : symfonyLogo,
    title:'My Quiz',
    text:'good',
    gitLink: 'https://github.com/danielamoudokpo/MVC_My_Quiz' 
},

    { 
    image : symfonyLogo, 
    title:'simf2', 
    text:'nice',
    gitLink: '#' 

},

    { 
    image : symfonyLogo,
    title:'simf3',
    text:'too goog',
    gitLink: '#' 

},

    { 
    image : symfonyLogo,
    title:'simf4',
    text:'exelent',
    gitLink: '#' 

},

]
