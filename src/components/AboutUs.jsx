import {Box, makeStyles} from '@material-ui/core'
import logo from '../images/bg.jpg'
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

function About() {
  const clases = useStyles();
  return (
    <Box className={clases.component}>
        <Box className={clases.leftContainer}>
        </Box>
        <Box className = {clases.rightContainer}>
        <div className="about">
          <div class="container">
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
              </div>
              <div class="col-lg-5">
                <h1 class="font-weight-light">About</h1>
                <p>
                  We are a group of students studying with Lambton College and 
                  this application has been created as part of the project and shall not 
                  be used for any other purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </Box>
  );
}

export default About;