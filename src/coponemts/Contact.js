import React, { Component } from 'react';



class Contact extends Component{

    render(){

        return(
            <section className="py-5 contact-section" id={'Contact-Section'}>
                <div className=" py-3 container">
                    <h3 className='heading'>
                                Contacts
                    </h3>
                    <div className=' row contact-grids'>
                        <div className=" col-lg-5 contact-left">
                            <h4 className='mb-4'> Info Adress</h4>
                            <div className='row'>
                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-envelope-open" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 '>
                                    <h5>E-mail</h5>
                                    <p>
                                        <a href='#' > danielamoudokpo@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href='#' > kokou-daniel.amoudokpo@epitech.eu</a>
                                    </p>
                                   
                                </div>
                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-phone" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 mt-4'>
                                    <h5>Telephone</h5>
                                    <p>+33 07 66 52 11 65 </p>
                                   
                                </div>

                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-map-maker" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 mt-4'>
                                    <h5>Adrress</h5>
                                    <p> 186, Rue Edouard Tremblay</p>
                                    <p> 94400 , Vitry-sur-Seine, France</p>
                                   
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-7 mt-lg-0 mt-5 contact-rigth'>
                            <h4 className="mb-4 "> Entrer en contact</h4>

                            <form action="#" method="post">
                                <label><i className="fa mr-2 fa-user" aria-hidden="true"></i> Nom</label>
                                <input type="text" name="Name"  required="" placeholder='nom'/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-envelope-open" aria-hidden="true"></i>E-mail</label>
                                <input type="email" name="Email" placeholder='E-mail' required=""/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-phone" aria-hidden="true"></i>Telephone</label>
                                <input type="text" name="Phone" placeholder='text'  required=""/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-edit" aria-hidden="true"></i>Message</label>
                                <textarea name="Message" placeholder='Message....' required=""/>
                                <input type="submit" value="Envoyé"/>
				            </form>
                            
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

// SHA256:0VvCKlZXUykgVZdZ0Wk51EFubCmoHgz7rwAkRdQ97b4


export default Contact;