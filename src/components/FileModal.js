import React, { Component } from 'react'
import { Button, Icon, Modal,Segment,Input } from 'semantic-ui-react'
import mime from 'mime-types'

 class FileModal extends Component {

    state={
        file:null,
        authorized:['image/jpeg','image/png']
    }

    addFile=event=>{
        const file=event.target.files[0];
        console.log(file)
        if(file){
            this.setState({file})
        }
    }

    sendFile=()=>{
        const {file}=this.state
        const {uploadFile,closeModal}=this.props
        if(file!==null){
            if(this.isAuthorized(file.name)){
                const metadata={contentType:mime.lookup(file.name)}
                uploadFile(file,metadata)
                
                closeModal()
            }
        }

    }
    isAuthorized=filename=>this.state.authorized.includes(mime.lookup(filename))

    clearFile=()=>this.setState({file:null});

    render() {
    
            const {modal,closeModal}=this.props
            return (
                <Modal basic open={modal} onClose={closeModal}>
                    <Modal.Header>
                        Select an Image File
                    </Modal.Header>
                    <Modal.Content>
                        <Segment inverted>
    
                            <Input
                            onChange={this.addFile}
                            fluid
                            label="File types:jpg,png"
                            name="file"
                            type="file"
                            
                            
                            />
    
                        </Segment>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                         onClick={this.sendFile}
                         color="green"
                         inverted
                        >
                       <Icon name="checkmark"/>
                        Share
                        </Button>
    
                        <Button
                           color="red"
                           inverted
                            onClick={closeModal}
                        >
                            <Icon name='remove'/>Cancel
                       </Button>
                    </Modal.Actions>
    
    
    
    
                </Modal>
        )
    }
 }

export default FileModal
