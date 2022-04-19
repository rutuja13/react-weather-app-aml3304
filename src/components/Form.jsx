import React from "react";
import { useEffect, useState } from "react";
import {getData} from "../service/api"
import Information from "./Information"


const Form = () =>{
    const [data , getWeatherData ] = useState();
    const [city ] = useState("Toronto ");
    const [country ] = useState("CA");
    const [click,handleClick] = useState(true);
    

    useEffect(()=>{
        
        const getWeather = async() =>{
            city && await getData(city,country).then(response =>{
                getWeatherData(response.data)
                console.log(response.data)
            })
        }
        getWeather();
        handleClick(true);
    },[click]);
    
    return(
        <React.Fragment>
            
            <Information data = {data}>

            </Information>
        </React.Fragment>
        
    )
}
export default Form;