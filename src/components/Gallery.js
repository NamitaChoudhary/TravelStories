import React, { Component } from 'react'
import { Container, Header,Icon } from 'semantic-ui-react'

 class Gallery extends Component {
    render() {
        return (
            <>
             <Container textAlign="center">
                 <Header as='h1' size='huge'>Your Pictures</Header>
                 
                 <p>
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      
                 </p>

                 <Icon name="plus" size="huge" circular  />

               

             </Container>

            </>
        )
    }
}

export default Gallery
