import React, { Component, Fragment } from 'react'
import { Item,Grid, Image,Container,Header,Card,Icon } from 'semantic-ui-react'
import Navbar from './Navbar'
import Image1 from './image11.jpg'
import Image2 from './image17.jpg'
import Image3 from './image20.jpg'
import Image4 from './image23.jpg'
import Sidebar from './Sidebar'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
           <Fragment>
            <Navbar />
            <ImageSlider  slides={SliderData}/>

            <Container className="container">
                <Header as="h3" content textAlign ="center" color="blue">TRAVEL WRITING</Header>
            <Header size="huge" content textAlign="center"  className="header1" >We Share Your Travel Stories</Header>
    <p className="para">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      
    </p>
  </Container>
  <Card.Group itemsPerRow={4}>
  <Card>
    <Image src={Image1} size="small" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Taj Mahal</Card.Header>
      <Card.Meta>Agra, Uttar Pradesh</Card.Meta>
      <Card.Description>
      The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='location arrow' />
        Read Details
      </a>
    </Card.Content>
    
  </Card>
  <Card>
    <Image src={Image2} size="small" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Qutub Minar</Card.Header>
      <Card.Meta>New Delhi, Delhi</Card.Meta>
      <Card.Description>
      The Qutb Minar, also spelled as Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India. The height of Qutb Minar is 72.5 meters, making it the tallest minaret in the world built of bricks
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='location arrow' />
        Read Details
      </a>
    </Card.Content>
    
  </Card>

  <Card className ="cards">
    <Image src={Image3} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Golden Temple</Card.Header>
      <Card.Meta>Amritsar, Punjab</Card.Meta>
      <Card.Description>
      The Golden Temple, also known as Harmandir Sahib, meaning "abode of God" or Darbār Sahib, meaning "exalted court", is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='location arrow' />
        Read Details
      </a>
    </Card.Content>
    
  </Card>
  <Card>
    <Image src={Image4} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Hawa Mahal</Card.Header>
      <Card.Meta>Jaipur, Rajasthan</Card.Meta>
      <Card.Description>
      Hawa Mahal is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='location arrow' />
        Read Details
      </a>
    </Card.Content>
    
  </Card>
  </Card.Group>

  <Container className="container11" fluid>
               
            <Header  icon textAlign="center" color="yellow" >
                <Icon name="gem" circular/>
                <Header.Content >Share Your Stories And Experiences</Header.Content>

               </Header>
               <p className="para">
               
               <Icon name="pencil alternate" color="yellow"/>
               <Link to="/travelstories" color="yellow">Write Your Story</Link>
               </p>

    
  </Container>
  
             

               
                   
    
            </Fragment>
           
        )
    }
}

export default Home
