import React, { Component } from 'react'
import firebase from '../firebase'
import { Card,Header,Image } from 'semantic-ui-react'
import Navbar from './Navbar'



class Stories extends Component {

    state={
        dataRef:firebase.database().ref('stories'),
        data:[],
        listeners:[],
       

    }

    componentDidMount(){
        this.addListeners();
    }
    addDataListener=()=>{
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

    addListeners=()=>{
        this.addDataListener();
    }
   

    displayData=data=>(
        <Card.Group itemsPerRow={4}>
        {data.length>0 && data.map(story=>(
           
                <Card key={story.id}>
                    <Image src={story.image}/>
                    <Card.Content>
                        <Card.Header>{story.firstname} {story.lastname}</Card.Header>
                        <Card.Meta>
                            {story.destination}
                        </Card.Meta>
                        <Card.Description>
                            {/* <Header as h4>
                                Description
                            </Header> */}
                            {story.description}
                            
                            {story.experience}
                            {/* <Header as h4>Experience</Header>
                            {story.experience} */}
                        </Card.Description>
                    </Card.Content>
                </Card>
           
        ))}
        </Card.Group>
    )
    
   
    render() {
        const{data}=this.state
        return(
      <>
       <Navbar/>
       
         {this.displayData(data)}
     
        
      </>
       
        )
    }
}

export default Stories
