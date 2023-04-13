import './Proyects.css';
import ImageList from '@mui/material/ImageList';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageListItem from '@mui/material/ImageListItem';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageViewer from "react-simple-image-viewer";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

function Proyects() {
   
    const StyledTabs = styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} centered
        />
        ))({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    });
    
    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
        color: '#fff',
        },
        '&.Mui-focusVisible': {
        backgroundColor: 'black',
        },
    }),
    );
    const theme = useTheme();
  const [value, setValue] = React.useState(0);
  // Consultas de medios para diferentes tamaños de pantalla
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Pantallas pequeñas
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg')); // Pantallas medianas
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl')); // Pantallas grandes

  // Número de columnas para diferentes tamaños de pantalla
  const cols = isSmallScreen ? 2 : (isMediumScreen ? 3 : (isLargeScreen ? 3 : 3));

  const proyect1 = importAll(require.context('../../../Assets/Proyect1/', false, /\.(png|jpe?g|svg)$/));
  const proyect2 = importAll(require.context('../../../Assets/Proyect2/', false, /\.(png|jpe?g|svg)$/));
  const proyect3 = importAll(require.context('../../../Assets/Proyect3/', false, /\.(png|jpe?g|svg)$/));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  
  return (

    
 <>
 <Box sx={{ bgcolor: 'var(--bc-dark)', paddingTop:'8rem' }}>
 <StyledTabs
 value={value}
 onChange={handleChange}
 aria-label="styled tabs example"
 >
 <StyledTab key="1" label="Workflows" {...a11yProps(0)} />
 <StyledTab key="2" label="Datasets" {...a11yProps(0)} />
 <StyledTab key="3" label="Connections" {...a11yProps(0)} />
 </StyledTabs>
 
</Box>
<SwipeableViews
         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
         index={value}
         onChangeIndex={handleChangeIndex}
         sx={{paddingTop:"5rem"}}
     >
 <TabPanel value={value} index={0} dir={theme.direction}>
             <ImageList variant="masonry" cols={cols} gap={20}>
             {proyect1.map((item, index) => (
                 <ImageListItem key={item} sx={{marginBottom:"1rem"}}>
                     <img
                         src={`${item}?w=248&fit=crop&auto=format`}
                         srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                         alt={index}
                         onClick={() => openImageViewer(index)}
                         loading="lazy"
                     />
                 </ImageListItem>
             ))}
             </ImageList>
         </TabPanel>
         <TabPanel value={value} index={1} dir={theme.direction}>
             <ImageList variant="masonry" cols={cols} gap={20}>
             {proyect2.map((item, index) => (
                 <ImageListItem key={item} sx={{marginBottom:"1rem"}}>
                     <img
                         src={`${item}?w=248&fit=crop&auto=format`}
                         srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                         alt={index}
                         onClick={() => openImageViewer(index)}
                         loading="lazy"
                     />
                 </ImageListItem>
             ))}
             </ImageList>
         </TabPanel>
         <TabPanel value={value} index={2} dir={theme.direction}>
             <ImageList variant="masonry" cols={cols} gap={20}>
             {proyect3.map((item, index) => (
                 <ImageListItem key={item} sx={{marginBottom:"1rem"}}>
                     <img
                         src={`${item}?w=248&fit=crop&auto=format`}
                         srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                         alt={index}
                         onClick={() => openImageViewer(index)}
                         loading="lazy"
                     />
                 </ImageListItem>
             ))}
             </ImageList>
         </TabPanel>
 </SwipeableViews>
 {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
          sx={{ zIndex:'200'}}
        />
      )}
 </>
    );
}

export default Proyects;

function importAll(r) {
  return r.keys().map(r);
}

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};
const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

  const itemData2 = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
  ];
  const itemData3 = [
    {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    },
    {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    },
    {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    },
    {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    },
    {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    },
    {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    },
  ];
