import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TravelStories from './components/TravelStories'
import Stories from './components/Stories'
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import{BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom' 
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Main from './components/Main';



class Root extends React.Component{
  render(){
    return(
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/travelstories" component={TravelStories}/>
      <Route path="/stories" component={Stories}/>
      <Route path="/videos" component={Videos}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/main" component={Main}/>
    </Switch>
    )

  }
}








ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Root/>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
