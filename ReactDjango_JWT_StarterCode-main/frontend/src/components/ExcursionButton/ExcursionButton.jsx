import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const image = {
      url: 'https://media.istockphoto.com/photos/having-fun-picture-id1139907731?k=20&m=1139907731&s=612x612&w=0&h=srfyHriQg4aNcFw5963weKHLvlmPoIavKkn9aK4v6Ac=',
      title: 'Create Excursion',
      width: '100%',
};
const image2 = {
      url: 'https://www.heart.org/-/media/Images/News/2019/March-2019/0304ThrillSeekers_SC.png',
      title: 'Find Excursions',
      width: '100%',
};
 
const ImageButton = styled(ButtonBase)(({ theme }) => ({
position: 'relative',
height: 200,
[theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
},
'&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
    opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
    opacity: 0,
    },
    '& .MuiTypography-root': {
    border: '4px solid currentColor',
    },
},
}));

const ImageSrc = styled('span')({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
backgroundSize: 'cover',
backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
backgroundColor: theme.palette.common.black,
opacity: 0.4,
transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
height: 3,
width: 20,
backgroundColor: theme.palette.common.white,
position: 'absolute',
bottom: -2,
left: 'calc(50% - 9px)',
transition: theme.transitions.create('opacity'),
}));  

export default function ExcursionButton(props) {

    return (
      <div >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', flexDirection: 'column', alignContent: 'flex-end', position: 'fixed'  }}>
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => props.setShowCreateExcursionModal(true)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
          <ImageButton
            focusRipple
            key={image2.title}
            style={{
              width: image2.width,
            }}
            onClick={() => props.setShowFindExcursionModal(true)}
          >
          <ImageSrc style={{ backgroundImage: `url(${image2.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image2.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>

          </ImageButton>
      </Box>
      </div>
    );
  }