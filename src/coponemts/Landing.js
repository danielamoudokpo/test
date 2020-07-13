import React, { Component } from 'react';
import my from '../assets/pic/park.JPG'
import my1 from '../assets/pic/1.JPG'
import b from '../assets/blog.jpg'
import gitLogo from '../assets/git.png'
import likLogo from '../assets/lk.jpg'



class Landing extends Component {

    render(){
        return(
            <section className="landing-section banner-layer " id={'Landing-Section'}>
                <div className ='container '>
                    <div className='row img-fluid' >
                        <div className='col-lg-8  column test'>
                           
                        </div>
                    </div>
                    
                    <div className="row agile_banner_info">
                        <div className="col-md-7 agile_banner_margin text-white">
                            <h5>Bonjour,</h5>
                            <h2>Je m'appelle<span> Daniel</span></h2>
                            <h4> Developpeur Web Full Stack,</h4>
                            <h5> C'est plus que du développement, c'est un style de vie.</h5>
                            <p>Actuellement en recherche d’une alternance professionnelle d’une durée de 12 mois à compter de Septembre 2020 dans le domaine du développement web.</p>
                            <a href="#"> Lire plus </a>
                        </div>
                       
			        </div>
                    <div className="col-md-5">

                            <a href='https://github.com/danielamoudokpo'> <img src={gitLogo} alt="" class=" image_margin img-fluid"/> </a>   
                            <a href='https://www.linkedin.com/in/daniel-kokou-amoudokpo/'> <img src={likLogo} alt="" class=" image_margin img-fluid lk"/></a>

                        </div>

                </div>

            </section>

        )
    }
}

export default Landing;