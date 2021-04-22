import React, { Component } from 'react'
import firebase from '../firebase'
import { Button,Icon,Label } from 'semantic-ui-react'
 class LikeButton extends Component {
     state={
         likes:this.props.likes
     }
     

    
    

    likeButton=()=>{
        //  console.log(this.props.id);
        //   console.log(this.state.likes)
         const ref=firebase.database().ref(`/videos/${this.props.id}`)
         ref.once('value')
         .then(snapshot=>{
             let data=snapshot.val();
             let likes=data.numlike;
             likes=likes+1;
             this.setState({likes:likes})
             ref.update({numlike:likes})
             
             
         })
         
         
         
            

    }




    render() {
        const {id}=this.props;
        
        return (
            
            
               
            <Button as='div' labelPosition='right' key={id} onClick={this.likeButton}>
            <Button color='teal'>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic color='teal' pointing='left'>
              {this.state.likes}
            </Label>
          </Button>
      
     
            
        )
    }
}

export default LikeButton
