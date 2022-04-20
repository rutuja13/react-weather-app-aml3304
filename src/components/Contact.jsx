import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, makeStyles} from '@material-ui/core';
import logo from '../images/bg.jpg';

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

export default function Contact() {
  const clases = useStyles();
  return (
    <Box className={clases.component}>
        <Box className={clases.leftContainer}>
        </Box>
        <Box className = {clases.rightContainer}>
          <ImageList sx={{ width: 700, height: 600 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
  );
}

const itemData = [
  {
    img: 'https://images.dailyhive.com/20190522124737/derick_toronto_61034540_2103253279972717_1695563698455431943_n.jpg',
    title: 'Summer',
  },
  {
    img: 'https://talesofabackpacker.com/wp-content/uploads/2021/09/The-Best-Things-to-do-in-Toronto-in-Winter-Frozen-Lake-Ontario-with-the-Toronto-Skyline-beyond-it.jpg',
    title: 'Winter',
  },
  {
    img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/toronto-autumn-2017-charline-xia.jpg',
    title: 'Autumn',
  },
  {
    img: 'https://images.dailyhive.com/20180516130721/sk_vox_32121575_1825381734149976_4108520454988234752_n1.jpg',
    title: 'Spring',
  }
];
