import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import { Container, Grid, List, Tab,Input, Segment,Icon } from 'semantic-ui-react';
var request = require('request');
var https = require('follow-redirects').https;
var fs = require('fs');






 class Main extends Component {
     state={
         latlong:'',
         venues:[],
         tokendata:'',
         hotels:[],
         shoppings:[],
         pilgrimplaces:[],
         entertainment:[],
         health:[],
         historicalplaces:[],
         nature:[],
         transport:[],
         location:''
     }

    componentDidMount(){
        this.getLocation();
    }

    


   getLocation=()=>{
    navigator.geolocation.getCurrentPosition(response=>{
        console.log(response.coords.latitude+","+response.coords.longitude)
        this.setState({latlong:response.coords.latitude+","+response.coords.longitude},()=>
        {
          this.getToken();
        })

        
    });
   }
   getToken=()=>{
    var config = {
        method: 'post',
        url: '/api/security/oauth/token?grant_type=client_credentials&client_id=33OkryzDZsJMqG6y6Fr_AADgTltAR-FtU_1J9WGqtGhLdxISk9dYPapu8yVflWcbioiFJGeIa4QG0BUCcKm6LMhkYoHsXMb1JEWiQ9JIHo0=&client_secret=lrFxI-iSEg__q1S663aGfEMr1jut5VBvfWNfC8iL8aDSRGHNbshE4y_ETepOE7g_1zCplz_YU7vRpsYYIyfFDzzkZgVWiZEFnJazsHJEyHS_fcFJ_w6E_g==',
        headers: { }
      };
      
      axios(config)
      .then( (response) =>{
       
          this.setState({tokendata:response.data.access_token},()=>{
            // this.getVenues();
            // this.getShopping();
            // this.getPilgrimPlaces();
            // this.getRecreationEntertainment();
            // this.getHotel();
            // this.getNature();
           
            // this.getHistoricalPlaces();
            // this.getHealthWellness();
              
          })
        console.log(this.state.tokendata);
      })
      .catch(function (error) {
        console.log(error);
      });
      
   }
   
  
   getVenues=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:'Mumbai',
     query:query,
     categoryId:"4bf58dd8d48988d10f941735",
     v:"20180323"
    

     
       
    }

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
       
      };
      
      axios(config)
      .then( (response)=> {
           this.setState({hotels:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
         
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getShopping=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4bf58dd8d48988d1fd941735",
     v:"20180323"
    

     
       
    }

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
       
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({shoppings:response.data.response.groups[0].items})
          console.log((response.data.response.groups[0].items));
        //   console.log(this.state.shoppings)
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getPilgrimPlaces=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4bf58dd8d48988d131941735",
     v:"20180323"
    

     
       
    }

     
       
    

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
       
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({pilgrimplaces:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getRecreationEntertainment=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4d4b7105d754a06377d81259",
     v:"20180323"
    

     
       
    }

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
       
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({entertainment:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getHealthWellness=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4bf58dd8d48988d196941735",
     v:"20180323"
    

     
       
    }
   

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
        headers: { 
          'Authorization': 'Bearer' +" "+ this.state.tokendata,
         
        }
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({health:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getHistoricalPlaces=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4bf58dd8d48988d181941735",
     v:"20180323"
    

     
       
    }
   

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
        
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({historicalplaces:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getNature=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"52e81612bcbc57f1066b7a21",
     v:"20180323"
    

     
       
    }
    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
       
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({nature:response.data.response.groups[0].items})
        //   console.log(this.state.hotels)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }

   getHotel=(query)=>{
    const endPoint="/v2/venues/explore?"
    const params={
     client_id:"3SKETMXEJTNXSSOUOPASZG5BBPEXNG5RQCWEVPU5KYE4INH1",
     client_secret:"ST2OSPZK03N0DGEAATNUTCHOQ1S1OWHXFKB5VL3BTDIOR5UA",

    
     near:this.state.location,
     query:query,
     categoryId:"4d4b7105d754a06379d81259",
     v:"20180323"
    

     
       
    }

    var config = {
        method: 'get',
        url: `${endPoint+new URLSearchParams(params)}`,
        headers: { 
          'Authorization': 'Bearer' +" "+ this.state.tokendata,
         
        }
      };
      
      axios(config)
      .then( (response)=> {
          this.setState({transport:response.data.response.groups[0].items})
          console.log(response.data.response.groups[0].items)
        // console.log((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    
     
      
      
   }
   handleSearch=event=>{
     this.setState({[event.target.name]:event.target.value},
     )

   }
   Search=()=>{
    this.getVenues();
            this.getShopping();
            this.getPilgrimPlaces();
            this.getRecreationEntertainment();
            this.getHotel();
            this.getNature();
           
            this.getHistoricalPlaces();
            this.getHealthWellness();
   }

   

 


    render() {
        const panes=[
            { menuItem: 'Hotels & Dining', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"}}>
                <List selection selection relaxed="very" divided verticalalign='middle' relaxed>
             {
                 this.state.hotels.length>0 && this.state.hotels.map(hotel=>(
                    <List.Item >
                     <List.Icon name='marker' />
                    <List.Content>
                   
                      <List.Header as='a'>{
                      hotel.venue.name
                       }</List.Header>
                      <List.Description>
                        { hotel.venue.location.address}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
                 
             }
             </List>
             
        
            </Tab.Pane> },
          { menuItem: 'Shopping', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
               <List selection selection relaxed="very" divided verticalalign='middle' relaxed>
           {
                 this.state.shoppings.length>0 && this.state.shoppings.map(shopping=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{shopping.venue.name}</List.Header>
                      <List.Description>
                        {shopping.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>

          </Tab.Pane> },
          { menuItem: 'Pilgrim Places', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
              <List selection selection relaxed="very"  divided verticalalign='middle' relaxed>
              {
                 this.state.pilgrimplaces.length>0 && this.state.pilgrimplaces.map(pilgrimplaces=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{pilgrimplaces.venue.name}</List.Header>
                      <List.Description>
                        {pilgrimplaces.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
          </Tab.Pane> },
          { menuItem: 'Recreation & Entertainment', render: () => <Tab.Pane  style={{"overflow-y":"scroll" , height:"420px"} }>
              <List selection divided selection relaxed="very" verticalalign='middle' relaxed>
              {
                 this.state.entertainment.length>0 && this.state.entertainment.map(entertainment=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{entertainment.venue.name}</List.Header>
                      <List.Description>
                        {entertainment.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
          </Tab.Pane> },
          { menuItem: 'Health & Wellness', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
               <List selection divided selection relaxed="very"  verticalalign='middle' relaxed>
              {
                 this.state.health.length>0 && this.state.health.map(health=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{health.venue.name}</List.Header>
                      <List.Description>
                        {health.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
          </Tab.Pane> },
          { menuItem: 'Historical Places', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
              <List  selection divided  selection relaxed="very" verticalalign='middle' relaxed>
              {
                 this.state.historicalplaces.length>0 && this.state.historicalplaces.map(historicalplaces=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{historicalplaces.venue.name}</List.Header>
                      <List.Description>
                        {historicalplaces.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
          </Tab.Pane> },
          { menuItem: 'Nature ', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
               <List  selection relaxed="very" divided verticalalign='middle' relaxed>
              {
                 this.state.nature.length>0 && this.state.nature.map(nature=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{nature.venue.name}</List.Header>
                      <List.Description>
                        {nature.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
          </Tab.Pane> },
         { menuItem: 'Hotel', render: () => <Tab.Pane style={{"overflow-y":"scroll" , height:"420px"} }>
             <List  selection divided relaxed="very" verticalalign='middle' relaxed>
             {
                 this.state.transport.length>0 && this.state.transport.map(transport=>(
                    <List.Item divided verticalAlign='middle'>
                    <List.Icon name='marker' />
                    <List.Content>
                      <List.Header as='a'>{transport.venue.name}</List.Header>
                      <List.Description>
                        {transport.venue.location.formattedAddress[0]}
                      </List.Description>
                    </List.Content>
                  </List.Item>
        
                 )
        
                 )
             }
             </List>
         </Tab.Pane> },
        ]
        
        return (
            <>
            <Navbar/>
            <div className="main">
            <Container >
            <Grid columns='equal' textAlign="center">
              <Grid.Row stretched>
                <Grid.Column>
                  <Grid.Column>
                  <Input 
                  name="location"
                  size="small" 
                  
                  // transparent
                  icon={<Icon name='search' inverted circular link  onClick={this.Search}/>}
                  placeholder='Search...' 
                  onChange={this.handleSearch}
                  value={this.state.location}
                  
                  
                  />
                  </Grid.Column>
                 
                 
                
                    <Segment >
                    <Tab  className="Tab1" menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} size="massive"/>
                    </Segment>
                  
                 
                  
                </Grid.Column>

              </Grid.Row>
            </Grid>
            </Container>
            </div>
            
              
           
            
            
           
            </>
        )
    }
}

export default Main
