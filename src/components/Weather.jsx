import {Box, makeStyles} from '@material-ui/core'
import logo from '../images/bg.jpg'
import Form from './Form';
import * as React from 'react';



const useStyles = makeStyles({
    component:{
        height :'100vh',
        display:'flex',
        alignItems : 'center',
        width : '85%',
        margin : '0 auto',
        padding : 10 ,
        fontSize : 20 , 
        letterSpacing : 2

        
    },
    leftContainer :{

        backgroundImage: `url(${logo})`,
        height : '80%',
        width : '30%',
        backgroundSize : 'cover',
        borderRadius : '20px 0px 0px 20px'
        

    },
    rightContainer:{
        background :'linear-gradient(to right , #e74c3c , #e67e22)',
        height:'80%',
        width : '70%'
    }
    
})


const Weather = () =>{
    const clases = useStyles();
  
    return(
        <Box className={clases.component}>
            <Box className={clases.leftContainer}>
            </Box>
            <Box className = {clases.rightContainer}>
            <Form />
            </Box>
            
        </Box>
    )
}

export default Weather;