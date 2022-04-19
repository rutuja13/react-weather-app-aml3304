import { makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import {getData} from "../service/api"
import Information from "./Information"

const useStyles = makeStyles({
    input:{
        color : '#fff' , 
        marginRight : 15 , 

    } , 
    component :{
        padding : 10 , 
        background : '#445a6f'
    },
    button :{
        width : 150,
        height : 40,
        background : '#e67e22',
        color : '#fff',
        marginTop :5
    }
})

const Form = () =>{
    const classes = useStyles();
    const [data , getWeatherData ] = useState();
    const [city ] = useState("Toronto ");
    const [country ] = useState("CA");
    const [click,handleClick] = useState(true);
    

    useEffect(()=>{
        
        const getWeather = async() =>{
            city &&     await getData(city,country).then(response =>{
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