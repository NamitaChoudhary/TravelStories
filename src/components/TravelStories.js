import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import FileModal from './FileModal'
import firebase from '../firebase'
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Item,
    Image,
    Search,
    Segment,
    Container,
    Form,
    Message
   
   
  } from 'semantic-ui-react'
  import Image11 from './image25.jpg'

 class TravelStories extends Component {

     state={
         id:'',
         firstname:'',
         lastname:'',
         destination:'',
         description:'',
         experience:'',
         file:'',
         errors:[],
         loading:false,
         modal:false,
         dataRef:firebase.database().ref('stories'),
         storageRef:firebase.storage().ref(),
         metadata:{
            contentType:'image/jpeg'
        },
         data:[]

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
     isFormEmpty=({firstname,lastname,destination,description,experience})=>{
         return !firstname.length || !lastname.length || !destination.length || !description.length || !experience.length;
     }

     displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)
     
     handleChange=event=>{
         this.setState({[event.target.name]:event.target.value})
     }
     setImage=()=>{
        
        this.state.dataRef
        .child(this.state.id)
        .update({
            image:this.state.file
        })
        .then(()=>{
            this.setState({id:'',file:''})
            console.log('image updated')

        })
        .catch(err=>{
            console.error(err);
        })
    }

     uploadFile=(file,metadata)=>{
         const{storageRef,dataRef,id}=this.state
         storageRef
         .child(`stories/${id}`)
         .put(file,metadata)
         .then(snap=>{
             snap.ref.getDownloadURL().then(downloadURL=>{
                 this.setState({file:downloadURL},()=>this.setImage())
                 
             })
         })

     }

     

     handleSubmit=event=>{
        event.preventDefault()
         if(this.isFormValid())
         { 
            this.setState({errors:[],loading:true})
            const {dataRef,firstname,lastname,destination,description,experience,id}=this.state;
            const key=dataRef.push().key
            this.setState({id:key});
            
            const newData={
                id:key,
                firstname:firstname,
                lastname:lastname,
                destination:destination,
                description:description,
                experience:experience
            }

           dataRef
           .child(key)
           .update(newData)
           .then(()=>{
            this.setState({ loading: false, errors: [],firstname:'',lastname:'',destination:'',description:'',experience:'' });
           })
           .catch(err=>{
               this.setState({errors:this.state.errors.concat(err),loading:false});
           })

         }
     }

     openModal=()=>this.setState({modal:true})

     closeModal=()=>this.setState({modal:false})
     
    render() {
        const {firstname,lastname,destination,description,experience,errors,loading,modal}=this.state;
        return (
            <Fragment>
                <Navbar/>
                <Container className="container1">
                <Grid >
    <Grid.Column width={6}>
      <Image src={Image11}/>
    </Grid.Column>
     
      
        <Grid.Column style={{maxWidth:550}} width={9} >
            <Header as="h3" icon textAlign="center" color="blue">
            <Icon name="book" color="teal"/>
                My Travel Story
          

            </Header>
            <Form >
                <Segment stacked >
                    <Form.Group widths="equal">
                    <Form.Input
                     name="firstname"
                     fluid 
                     label="First name"
                     placeholder="First name"
                     type="text"
                     onChange={this.handleChange}
                     value={firstname}
                    
                    
                    
                    />
                    <Form.Input
                     name="lastname"
                     fluid
                     label="Last name"
                     placeholder="Last name"
                     type="text"
                     onChange={this.handleChange}
                     value={lastname}

                    
                    
                    
                    />
                    </Form.Group>
                    <Form.Input
                     name="destination"
                     fluid
                     label="Destination"
                     placeholder="Destination"
                     type="text"
                     onChange={this.handleChange}
                     value={destination}
                    
                    
                    
                    />
                     <Form.TextArea 
                     name='description'
                     label='Description' placeholder='Short description of Journey..' 
                     onChange={this.handleChange}
                     value={description}
                     
                     
                     
                     />
                     
                      <Form.TextArea 
                      name='experience'
                      label='Experience' placeholder='Tell Us About Your Experience.....' 
                      onChange={this.handleChange}
                      value={experience}
                      
                      
                      />
                       
                     
                      
                     <Button.Group  widths="2">
                     <Button
                     disabled={loading} className={loading ? 'loading' : ''} 
                     icon="paperclip"
                     color="blue"
                 
                    
                     label="Share Your Story"
                     onClick={this.handleSubmit}
                     
                     />
                     <Button
                      icon="images"
                      color="teal"
                      label="Share Your Moments"
                      onClick={this.openModal}
                     
                     
                     />
                     
                     
                    
                    
                     
                     </Button.Group>
                     
                    
                </Segment>
            </Form>
            <FileModal
             modal={modal}
             closeModal={this.closeModal}
             uploadFile={this.uploadFile}
            
            />

            {errors.length > 0 && (
                        <Message  error >
                            <h3 >Error</h3>
                            {this.displayErrors(this.state.errors)}
                        </Message>
                    )}

        </Grid.Column>

      
    
    
  </Grid>
  </Container>
    
            </Fragment>
        )
    }
}

export default TravelStories
