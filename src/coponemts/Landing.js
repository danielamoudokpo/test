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
                            <h5>Hi,</h5>
                            <h2>My name is <span> Daniel</span></h2>
                            <h4>Web Developer Full Stack</h4>
                            <p>Recherche d’une alternance professionnelle à compter de Novembre 2020 dans le domaine du développement web</p>
                            <p> Is more than just developing , It's Style</p>
                            <a href="#"> Read More </a>
                        </div>
                       
			        </div>
                    <div className="col-md-5 image_margin">

                            <a href='https://github.com/danielamoudokpo'> <img src={gitLogo} alt="" class=" image_margin img-fluid"/> </a>   
                            <a href='https://www.linkedin.com/in/daniel-kokou-amoudokpo/'> <img src={likLogo} alt="" class=" image_margin img-fluid lk"/></a>

                        </div>

                </div>

            </section>

        )
    }
}

export default Landing;