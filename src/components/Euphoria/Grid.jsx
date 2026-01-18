import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Section from "../Section";
import { useNavigate, useLocation, } from 'react-router-dom';
import { DebateDUO } from '../../assets';
import { Gradient } from '../design/Services';
import bg1 from "../../components/CoordiCard/bg1.png";
import Carousel from './Carousel';
import { slides } from './slideDetails';
import "./Grid.css";
import "./Carousel.css";


const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: 12,
  background: '#000',
  opacity: 0.6,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function Grid() {
  const navigate = useNavigate();
  
  const handleClick = (title, STitle) => {
    // console.log('Title:', title);
    // console.log('STitle:', STitle);
    navigate(`/game/${title}`, { state: { STitle } });
  };
  return (
    <Section
    className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings id="event">
      
      <div className="carousel">
        <div className='carousel-wrapper'>
        {slides.map((slider) => (
        <Carousel
          key={slider.key}
          categoryId={slider.key}
          category={slider.category}
          events={slider.events}
          onEventClick={handleClick}
        />
      ))}
        
      </div>
      </div>
      <div className="absolute left-0 top-36">
        <Gradient src={bg1} />
      </div>
          <div className="absolute bottom-5 rotate-[170deg] right-10">
        <Gradient src={bg1} />
      </div>
    </Section>
  );
}

export default Grid;