import React, {Component} from 'react';

import './App.css';
import Titles from '../components/Titles/Titles';
import WeatherForm from '../components/WeatherForm/WeatherForm';
import Weather from '../components/Weather/Weather';
import { connect} from 'react-redux';
import {setWeather} from '../Actions/Actions';


const API_KEY= process.env.REACT_APP_API_KEY

const mapStateToProps=(state)=>{
  return{ 
          
         temperature:state.temperature,
          humidity:state.humidity,
          city:state.city,
          country:state.country,
          description:state.description,
          error:state.error
  }
}

const mapDispatchToProps= dispatch=>{
  return{
    getWeather:(API_KEY,city,country)=>dispatch(setWeather(API_KEY,city,country))
  }
}

class App extends Component{
   
     getWeatherApi=(e)=>{
      e.preventDefault();
          const city = e.target.elements.city.value;
          const country= e.target.elements.country.value;
          if(city && country){
            this.props.getWeather(API_KEY,city,country)
             }
        }
       
   render(){
    const {temperature,humidity,city,country,description,error}=this.props;
     return (
    <React.Fragment>
    <div>
      <header className="App-header">
        <h1>Weather App</h1>

      </header>
      <div className='main'>
       <div className='flex-wrapper'>
         
           <div className='column title-left'>
             <Titles />
           </div>
           <div className='column form-right'>

             <WeatherForm 
             getWeatherApi={this.getWeatherApi}
             />
             <Weather 
             temperature={temperature}
             humidity={humidity}
             city={city}
            country={country}
            description={description}
            error={error}
             /> 
             
              </div>
         </div>
      </div>
    </div>
    </React.Fragment>
  );
}
   }
  

export default connect(mapStateToProps,mapDispatchToProps)(App);
