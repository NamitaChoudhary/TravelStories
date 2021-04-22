import React, { Component } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

 class ImageSlider extends Component {
     state={
         current:0
         
       }
     prevSlide=()=>{
        const {slides}=this.props
        const length=slides.length
        let current=this.state.current
        console.log(current)
        if(current===0)
        {
            this.setState({current:length-1});
        }
        else{
            this.setState({current:current-1});
        }


     }
     nextSlide=()=>{

        const {slides}=this.props
        const length=slides.length
        let current=this.state.current
       
        
           if(current===length-1)
           {
               this.setState({current:0})
           }
           else{
            this.setState({current:current+1})   
           }
           
     }
    render() {
        const {current}=this.state
        
        return (
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide}/>
            {SliderData.map((slide,index)=>{

                return(

                    <div className={index===current?'slide active':'slide'} key={index}>
                        {index===current && (
                        <img src={slide.image} alt="travel image" className="image1"/>)
                        }
                     
                    </div>
                    
                )
            })}
            </section>
        )
    }
}

export default ImageSlider
