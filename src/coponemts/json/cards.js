
import React, { Component ,useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card, CardLink, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import laravelLogo from "../assets/laravel.jpeg";
import reactLogo from "../assets/react.png";
import symfonyLogo from "../assets/symfony.png";
import snp from '../assets/snp.png';
import cht from '../assets/chatt.jpeg';
import es from '../assets/e-s.png';


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


    toggle = (index) =>{

        console.log(index);
        // setReqIndex(index);
        this.setState({reqIndex : index});

        this.setState({modalInfo:reactModal[index]})

        console.log(this.state.modalInfo);
        // setModal(!modal);   
        // this.setState({modal:true})

    }

    // componentWillReceiveProps(){
    //     this.setModalInfo);
    // }

    componentDidMount(){
        this.setState({modalInfo: reactModal[0]})

        console.log(this.state.modalInfo);

    }

    saveModalDetails(item) {

        console.log(item);
        // const requiredItem = this.state.requiredItem;
        // let tempbrochure = this.state.brochure;
        // tempbrochure[requiredItem] = item;
        // this.setState({ brochure: tempbrochure });
      }


    componentWillReceiveProps(nextProps) {
        this.setState({
            mHead: nextProps.mHead,
            mBody: nextProps.mBody,
        });
    }

   

    renderModal = ()=> {

        // var ModalInfod  = {modalInfo}
        // console.log({ModalInfod });
        return(
                <Modal isOpen={this.state.modal} toggle={this.toggle}   className={this.state.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.modalInfo.mHeader} </ModalHeader>
                    {/* <ModalHeader toggle={toggle}> test </ModalHeader> */}
                    <ModalBody> {this.state.modalInfo.mBody} </ModalBody>
                    {/* <ModalBody> toi </ModalBody> */}
                    <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{''}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>     
        )
    }
    
    renderReactCard = (reactCard, index) => {
        // console.log({modalInfo});
    
        return(
            <div className='col-md-6'>
                <Card style= {{width: '18rem'}} key={index} onClick={()=>this.toggle(index)}>
                    <CardImg style= {{width: '15rem' ,height:'200px'}} top width="100%" src={reactCard.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {reactCard.title} </CardTitle>
                    <CardText> {reactCard.text} </CardText>
                    <CardLink href={reactCard.gitLink}>
                        <Button>Button</Button>
                    </CardLink>
                    </CardBody>
                </Card>
            </div>
        )
    
    }
    
    renderLaravelCard = (laravelCard, index) => {
        return(
            <div className='col-md-6'>
                <Card style= {{width: '18rem'}} key={index} onClick={()=>this.toggle(index)}>
                    <CardImg style= {{width: '15rem' ,height:'200px'}}top width="100%" src={laravelCard.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {laravelCard.title} </CardTitle>
                    <CardText> {laravelCard.text} </CardText>
                    <CardLink href={laravelCard.gitLink}>
                        <Button>Button</Button>
                    </CardLink>
                    </CardBody>
                </Card>
            </div>
        )
    
    }
    
    renderSymfonyCard = (symfonyCard, index) => {
        return(
            <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                <Card style= {{width: '18rem' ,height:'350px'}} key={index} onClick={()=>this.toggle(index)}>
                <CardImg style= {{width: '15rem' ,height:'200px'}}top width="100%" src={symfonyCard.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {symfonyCard.title} </CardTitle>
                    <CardText> {symfonyCard.text} </CardText>
                    <CardLink href={symfonyCard.gitLink}>
                        <Button>Button</Button>
                    </CardLink>
                    </CardBody>
                </Card>
            </div>
        )
    
    }


    render(){

        return(
            <div>
                    {/* { console.log()} */}
                <section className="projects-section py-5 " id={'Projects-Section'} style={{ }}>
                        <h3 className='heading text-white '>
                            Projects
                        </h3>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">REACT</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">LARAVEL</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">SYMFONY</a>
                            </div>
                        </nav>
                    <div style ={{textAlign:'center'}} className="tab-content" id="nav-tabContent">

                                                    {/* ----------------REACT ----------------*/}  

                        <div className=" tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                {reactCard.map(this.renderReactCard)}
                            </div>
                        </div>
                                                {/* ----------------LARAVELL ----------------*/}  

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row'>
                                {laravelCard.map(this.renderLaravelCard)}
                            </div>
                        </div>
                                                            {/* ----------------SYMFONY ----------------*/}  

                        <div className=" tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" >  
                            <div className="row">
                                {symfonyCard.map(this.renderSymfonyCard)}
                            </div> 
                        </div>
                                                        {/* ----------------END OF TAB CCONTENT ----------------*/} 

                        {/* <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>hello</ModalHeader>
                            <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={toggle}>Do Something</Button>{''}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal> */}
                        <div>
                            {/* {this.state.modalInfo.map((this.renderModal))} */}
                            {/* {this.renderModal(this.state.modalInfo)}  */}
                            {/* {console.log(this.state.modalInfo)} */}
                            {/* {this.renderModal()} */}

                        </div>
                        
                    </div>
                </section>
            </div>

        )
    }

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
