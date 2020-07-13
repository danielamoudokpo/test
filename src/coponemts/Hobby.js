import React, { Component } from 'react';


class Hobby extends Component {

    render(){
        return(
            <div className="py-5 hobby-section blog" id={'Hobby-Section'}>

                <div className="container py-3 ">
                    <h3 className='heading'>
                    CENTRE D’INTERETS
                    </h3>
                    <ul style={{fontSize:'170%',fontWeight:'450'}}>
                        <li> Football, ancien joueur de New York Fusion Soccer Club à New York et
                        actuellement joueur à l’Entente Sportif de Vitry-sur-Seine </li>
                        <li> Danses Hip Hop </li>
                        <li> Restauration </li>
                        <li> Voyage </li>
                    </ul>

                    <div className=' column col-md-5' style={{paddingTop:'60px'}}>
                    <h3 className=' py-2 heading1'>
                                Langues
                    </h3>

                    <ul style={{fontSize:'170%',fontWeight:'450'}}>
                        <li> Francais </li>
                        <li> Anglais </li>
                    </ul>

                    </div>

                    <div className='column col-md-7'>

                    </div>

                </div>

            </div>
        )
    }
}

export default Hobby;