import React, { Component } from 'react'
import firebase from '../firebase'
import { Button, Container, Grid,Icon,Label, Modal, Segment,Input,Form } from 'semantic-ui-react'
import Navbar from './Navbar'
import YouTube from 'react-youtube'
import LikeButton from './LikeButton'
var getYouTubeID = require('get-youtube-id');


 class Videos extends Component {
     state={
         modal:false,
         id:'',
         link:"",
         title:"",
         youtubeID:'',
         errors:[],
         loading :false,
         numlike:0,
         dataRef:firebase.database().ref('videos'),
          data:[],
         

     }
     componentDidMount(){
         this.addDtaListener();
     }
     
     

     addDtaListener=()=>{
        let loadedData=[];
        const ref=this.state.dataRef
        ref.on('child_added',snap=>{
            loadedData.push(snap.val());
            // console.log(loadedData)
            this.setState(
               {data:loadedData}
             )
            
           
        })
     }
     

     addLink=event=>{
         this.setState({[event.target.name]:event.target.value})
         this.setState({youtubeID:getYouTubeID(this.state.link)})
         console.log(getYouTubeID(this.state.link));

     }
     isFormValid=()=>{
        let errors=[];
        let error;
        if(this.isFormEmpty(this.state)){
            error={message:'Fill in all fields'};
            this.setState({errors:errors.concat(error)});
            return false;
        }
        else {
            return true;
        }
    }

    isFormEmpty=({link,title})=>{
        return !title.length|| !link.length;
    }
     sendVideo=()=>{
        
         if(this.isFormValid()){
            this.setState({errors:[],loading:true})
             const {link ,title,dataRef,youtubeID,numlike}=this.state;
             const key=dataRef.push().key;
             const newData={
                 link:link,
                 title:title,
                 youtubeID:youtubeID,
                 id:key,
                 numlike:numlike
             }
             dataRef
             .child(key)
             .update(newData)
             .then(()=>{
                 this.setState({loading:false,errors:[],link:'',title:'',id:'',youtubeID:''})
             })
             .catch(err=>{
                this.setState({errors:this.state.errors.concat(err),loading:false});
            })



         }

         this.closeModal();
         this.clearFile();


     }
    
     clearFile=()=>this.setState({link:''});
     openModal=()=>this.setState({modal:true})

     closeModal=()=>this.setState({modal:false})
    render() {
        const {modal,link,title,data,youtubeID}=this.state;
        const opts = {
            height: '245',
            width: '349',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
        return (
            <>
            <Navbar/>
            <Grid  columns={4} celled>
                {data.length>0 && data.map(video=>(
                    <Grid.Column key={video.id}>
                    <Label   ribbon='left' color='teal'>{video.title}</Label>
                    <YouTube videoId={video.youtubeID} opts={opts} />
                   <LikeButton  id={video.id} likes={video.numlike}/>
                   
                    </Grid.Column>
                ))}
               

                

            </Grid>
            <Container textAlign='center'>
            <Button as='div' labelPosition='right'>
      <Button color='blue' onClick={this.openModal}>
        <Icon name='podcast' />
        POST
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        Share your vlogs
      </Label>
    </Button>
            </Container>
            <Modal basic open={modal} onClose={this.closeModal}>
                <Modal.Header>Post Video</Modal.Header>
                <Modal.Content>
                    <Segment inverted>
                    <Form.Input 
                            fluid 
                            name="link" 
                            
                            
                            
                            placeholder="Add a link of video" 
                            
                            onChange={this.addLink}

                            value={link}

                            type="link"
                        />
                        <Form.Input 
                            fluid 
                            name="title" 
                            
                            
                            
                            placeholder="Add a Title to video" 
                            
                            onChange={this.addLink}

                            value={title}

                            type="name"
                        />
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                    onClick={this.sendVideo}
                    color="green"
                    inverted
                    
                    >
                         <Icon name='checkmark'/>Send

                    </Button>
                    <Button
                       color="red"
                       inverted
                        onClick={this.closeModal}
                    >
                        <Icon name='remove'/>Cancel
                   </Button>
                </Modal.Actions>

            </Modal>
            
            
            </>
        )
    }
}

export default Videos
