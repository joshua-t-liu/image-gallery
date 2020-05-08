import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, useLocation, useHistory, Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Path = styled.path`
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  cursor: pointer;
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonCarousel = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px;
  }
`;

const ButtonNav = styled(Button)`
  background-color: rgb(255, 255, 255);
  margin-bottom: 8px;
  border-style: ${({ selected }) => selected ? 'solid' : 'none'};
  display: inline-block;
  white-space: nowrap;
  color: ${({ selected }) => selected ? 'rgb(0, 120, 130)' : 'rgb(59, 65, 68)'};
  box-shadow: ${({ selected }) => selected ? 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px' : ''};
  &:hover {
    background-color: ${({ selected }) => selected ? '' : 'rgb(232, 233, 234)' };
  }
`;

const ButtonCTA = styled(Button)`
  display: inline-block;
  background-color: rgb(255, 255, 255);
  color: rgb(59, 65, 68);
  border-color: rgb(205, 209, 212);
  min-width: 110px;
  &:hover {
    background-color: rgb(232, 233, 234);
  }
  border-style: ${({ theme }) => theme.borderStyle};
  ${Path} {
    fill: ${({ theme }) => theme.color};
  }
`;

ButtonCTA.defaultProps = {
  theme: {
    color: 'rgb(59, 65, 68)',
    borderStyle: 'solid'
  }
}

const ButtonSchedule = styled(Button)`
  background-color: rgb(217, 60, 35);
  width: ${({ width }) => width};
  color: rgb(255, 255, 255);
  border-color: rgb(217, 60, 35);
`;

const ButtonSlide = styled(Button)`
  position: absolute;
  height: 48px;
  width: 48px;
  padding: 1px;
  border-radius: 24px;
  background-color: rgb(59, 65, 68);
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: 4;
  border-style: none;
  &:hover {
    background-color: rgb(134, 144, 153);
    ${Path} {
      fill: rgb(255, 255, 255);
    }
  }
`;

const ButtonGallery = styled(Button)`
  background-color: rgba(59, 65, 68, 0.8);
  color: rgb(255, 255, 255);
  padding: 0px 8px;
  border-radius: 4px;
  border-style: none;
  display: flex;
  align-items: center;
  height: 28px;
  &:hover {
    background-color: rgb(113, 124, 124);
  }
`;

const StyledExit = styled.div`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    ${Path} {
      fill: rgb(0, 120, 130);
    }
  }
`;

const ButtonTemplate = ({ StyledComponent, divStyle, height, width, d, fill, spanStyle, title}) => {
  return () => (
    <StyledComponent>
      <div style={divStyle}>
        {d &&
          <svg viewBox='0 0 32 32' style={{ height, width }}>
            <Path d={d} fill={fill}>
            </Path>
          </svg>
        }
        {title &&
          <span style={spanStyle}>{title}</span>
        }
      </div>
    </StyledComponent>
  );
};

const Save = ButtonTemplate({
  styledComponent: ButtonCTA,
  divStyle: { display: 'flex', alignItems: 'center' },
  height: '24px',
  width: '24px',
  d: 'M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z',
  fill: '#869099',
  spanStyle: { marginLeft: '8px' },
  title: 'Save',
});

// const Save = () => (
//   <ButtonCTA>
//     <div style={{ display: 'flex', alignItems: 'center' }} >
//       <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
//         <Path d='M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z' fill='#869099' />
//       </svg>
//       <span style={{ marginLeft: '8px' }}>Save</span>
//     </div>
//   </ButtonCTA>
// );

const Share = () => (
  <ButtonCTA style={{ marginLeft: '16px'}}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z' fill='#869099' />
      </svg>
      <span style={{ marginLeft: '8px' }}>Share</span>
    </div>
  </ButtonCTA>
);

const dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

const SlideButton = ({onClick, top, left, right}) => (
  <ButtonSlide onClick={onClick} top={top} left={left} right={right}>
    <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
      <Path d={(left === 'auto') ? dRight : dLeft} fill='#ffffff' />
    </svg>
  </ButtonSlide>
)

const Gallery = ({ imageCount }) => (
  <ButtonGallery>
    <svg viewBox='0 0 32 32' style={{ height: '16px', width: '16px' }}>
    <path d='M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z' fill='#ffffff'></path>
    </svg>
    <span style={{ marginLeft: '4px', lineHeight: 1.4, fontSize: '14px' }}>{imageCount}</span>
  </ButtonGallery>
);

const Exit = ({}) => {
  const history = useHistory();

  const onClick = (event) => {
    event.stopPropagation();
    history.goBack();
  }

  return (
    <StyledExit onClick={onClick}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z' fill='#869099' />
      </svg>
    </StyledExit>
  )
}

const Schedule = ({ width = '100%', padding = '4px' }) => (
  <div style={{ padding: padding }}>
    <ButtonSchedule width={width} >Schedule a Tour</ButtonSchedule>
  </div>
)

const Tag = ({tag}) => (
  <span style={{ backgroundColor: 'rgb(255, 255, 255)', display: 'inline-block', borderRadius: '4px', marginRight: '4px', padding: '2px 4px', lineHeight: 1.33, fontSize: '12px', color: 'rgb(0, 178, 91)', fontWeight: 'bold', fontFamily: 'arial' }}>
    {tag}
  </span>
)

const Nav = ({ id, title, path, onClick, selected = false}) => {
  const { state } = useLocation();

  return (
    <Link to={{ pathname: path, state: state }} replace>
      <div style={{ borderWidth: '0px 2px 0px', borderColor: 'transparent', borderStyle: 'solid' }}>
        <ButtonNav id={id} selected={selected} onClick={onClick}>
          <span>{title}</span>
        </ButtonNav>
      </div>
    </Link>
  )
}

const carouselRight = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const carouselLeft = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';
const ButtonCarousel = ({ onClick, dir = 1 }) => (
  <StyledButtonCarousel onClick={onClick}>
    <div>
      <svg className='svg' viewBox='0 0 32 32'>
        <path d={dir > 0 ? carouselLeft : carouselRight} fill='#869099 '></path>
      </svg>
    </div>
  </StyledButtonCarousel>
)

const BtnTourType = () => (
  <div style={{ padding: '4px' }}>
    <div style={{ display: 'flex' }}>
      <button style={{ borderRadius: '8px 0 0 8px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(0, 120, 130)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(0, 120, 130)', color: 'rgb(255, 255, 255)', fontSize: '16px', fontWeight: 'bold', padding: '8px 16px' }}>In-Person</button>
      <button style={{ borderRadius: '0 8px 8px 0', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(205, 209, 212)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(59, 65, 68)', fontSize: '16px', fontWeight: 'bold', padding: '8px 16px' }}>Virtual</button>
    </div>
  </div>
)

const ScheduleRight = () => (
  <div style={{ position: 'absolute', top: 'calc(50% - 16px)', right: '-16px' }}>
    <button style={{ height: '32px', width: '32px', borderColor: 'rgb(232, 233, 234)', borderRadius: '24px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer' }}>
      <svg className="svg" viewBox="0 0 32 32">
        <path d='M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z' fill="#869099"></path>
      </svg>
    </button>
  </div>
);

const ScheduleLeft = () => (
  <div style={{ position: 'absolute', top: 'calc(50% - 16px)', left: '-16px' }}>
    <button style={{ height: '32px', width: '32px', borderColor: 'rgb(232, 233, 234)', borderRadius: '24px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer' }}>
      <svg className="svg" viewBox="0 0 32 32">
        <path d='M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z' fill="#869099"></path>
      </svg>
    </button>
  </div>
);


export { Save, Share, SlideButton, ButtonCarousel, Gallery, Exit, Nav, Schedule, Tag, BtnTourType, ScheduleRight, ScheduleLeft };