import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu,MenuItem,Segment } from 'semantic-ui-react'

 class Navbar extends Component {

    state = { activeItem: 'Destination' }

  handleItemClick = (e, { name }) =>{ this.setState({ activeItem: name })


  
   
}

    render() {
        const { activeItem } = this.state
        return (
            <Menu secondary size="large" stackable color="blue">
            <Menu.Item
              name='Destination'
              color="blue"
              active={activeItem === 'Destination'}
              onClick={this.handleItemClick}
             
            />
            <Menu.Item
              name='Experiences'
              color="blue"
              active={activeItem === 'Experiences'}
              onClick={this.handleItemClick}
             

              
            ><Link to="/stories">Experiences</Link></Menu.Item>
            <Menu.Item
              name='Travel Stories'
              color="blue"
              active={activeItem === 'Travel Stories'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Videos'
              color="blue"
              active={activeItem === 'Travel Stories'}
              onClick={this.handleItemClick}
            ><Link to="/videos">Videos</Link>
            </Menu.Item>

            <Menu.Item
              name='Gallery'
              color="blue"
              active={activeItem === 'Gallery'}
              onClick={this.handleItemClick}
            ><Link to="/gallery">Gallery</Link>
            </Menu.Item>
            <Menu.Item
              name='Main'
              color="blue"
              active={activeItem === 'Gallery'}
              onClick={this.handleItemClick}
            ><Link to="/main">Main</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
                color="blue"
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        )
    }
}

export default Navbar

