import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, useLocation, useHistory, Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Path = styled.path`
`;

const BasicButton = styled.button`
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  outline: none;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(59, 65, 68);
  &.centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => padding};
`;

const RoundButton = styled(BasicButton)`
  border-radius: 24px;
  padding: 1px;
`;

const StyledCarouselButton = styled(RoundButton)`
  height: 48px;
  width: 48px;
  border-style: none;
  background-color: rgb(59, 65, 68);
  &:hover {
    background-color: rgb(134, 144, 153);
    ${Path} {
      fill: rgb(255, 255, 255);
    }
  }
`;

const StyledCarouselButtonLight = styled(RoundButton)`
  width: ${({ width }) => width ? width :'24px'};
  height:  ${({ height }) => height ? height :'24px'};
  border-color: rgb(232, 233, 234);
  &:focus {
    box-shadow: rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px;
  }
`;

const StyledNavButton = styled(BasicButton)`
  color: ${({ selected }) => selected ? 'rgb(0, 120, 130)' : ''};
  border-style: ${({ selected }) => selected ? 'solid' : 'none'};
  margin-bottom: 8px;
  white-space: nowrap;
  box-shadow: ${({ selected }) => selected ? 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px' : ''};
  &:hover {
    background-color: ${({ selected }) => selected ? '' : 'rgb(232, 233, 234)' };
  }
`;

const StyledCTAButton = styled(BasicButton)`
  border-style: ${({ theme }) => theme.borderStyle};
  border-color: rgb(205, 209, 212);
  min-width: 110px;
  &:hover {
    background-color: rgb(232, 233, 234);
  }
  ${Path} {
    fill: ${({ theme }) => theme.color};
  }
`;

StyledCTAButton.defaultProps = {
  theme: {
    color: 'rgb(59, 65, 68)',
    borderStyle: 'solid'
  }
}

const StyledScheduleButton = styled(BasicButton)`
  background-color: rgb(217, 60, 35);
  width: ${({ width }) => width};
  color: rgb(255, 255, 255);
  border-color: rgb(217, 60, 35);
`;

const StyledGalleryButton = styled(BasicButton)`
  background-color: rgba(59, 65, 68, 0.8);
  color: rgb(255, 255, 255);
  padding: 0px 8px;
  border-radius: 4px;
  border-style: none;
  height: 28px;
  &:hover {
    background-color: rgb(113, 124, 124);
  }
`;

const StyledExitButton = styled.div`
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

const StyledTourButton = styled(BasicButton)`
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: rgb(205, 209, 212);
  width: 50%;
  &.selected {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;

const ButtonTemplate = (options) => {
  return (props) => {
    const overrides = Object.assign({ divStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } }, options, props);
    const { styledComponent, divStyle, height, width, d, fill, spanStyle, title} = overrides;

    return (
      React.cloneElement(styledComponent, props, [(
        <div key={0} style={divStyle}>
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
      )])
    )
  }
};

const TourTypeButton = () => (
  <div style={{ padding: '4px' }}>
    <div style={{ display: 'flex' }}>
      <StyledTourButton className='selected' borderRadius='8px 0 0 8px'>In-Person</StyledTourButton>
      <StyledTourButton borderRadius='0 8px 8px 0'>Virtual</StyledTourButton>
    </div>
  </div>
);

const SaveButton = ButtonTemplate({
  styledComponent: <StyledCTAButton />,
  height: '24px',
  width: '24px',
  d: 'M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z',
  fill: '#869099',
  spanStyle: { marginLeft: '8px' },
  title: 'Save',
});

const ShareButton = ButtonTemplate({
  styledComponent: <StyledCTAButton />,
  height: '24px',
  width: '24px',
  d: 'M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z',
  fill: '#869099',
  spanStyle: { marginLeft: '8px' },
  title: 'Share',
});

const SlideButtonL = ButtonTemplate({
  styledComponent: <StyledCarouselButton />,
  height: '24px',
  width: '24px',
  d: 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z',
  fill: '#ffffff',
});

const SlideButtonR = ButtonTemplate({
  styledComponent: <StyledCarouselButton />,
  height: '24px',
  width: '24px',
  d: 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z',
  fill: '#ffffff',
});

const CarouselButtonL = ButtonTemplate({
  styledComponent: <StyledCarouselButtonLight />,
  divStyle: {},
  d: 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z',
  fill: 'rgb(59, 65, 68)', //#3B4144
});

const CarouselButtonR = ButtonTemplate({
  styledComponent: <StyledCarouselButtonLight />,
  divStyle: {},
  d: 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z',
  fill: 'rgb(59, 65, 68)', //#3B4144
});

const ScheduleLeft = ButtonTemplate({
  styledComponent: <StyledCarouselButtonLight />,
  divStyle: {},
  height: '24px',
  width: '24px',
  d: 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z',
  fill: 'rgb(59, 65, 68)',
});

const ScheduleRight = ButtonTemplate({
  styledComponent: <StyledCarouselButtonLight />,
  divStyle: {},
  height: '24px',
  width: '24px',
  d: 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z',
  fill: 'rgb(59, 65, 68)',
});

const GalleryButton = ButtonTemplate({
  styledComponent: <StyledGalleryButton />,
  height: '16px',
  width: '16px',
  d: 'M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z',
  fill: '#ffffff',
  spanStyle: { marginLeft: '4px', lineHeight: 1.4, fontSize: '14px' },
});

const ScheduleButton = ButtonTemplate({
  styledComponent: <StyledScheduleButton />,
  title: 'Schedule a Tour',
});

const ExitButton = ({}) => {
  const history = useHistory();

  const onClick = (event) => {
    event.stopPropagation();
    history.goBack();
  }

  return (
    <StyledExitButton onClick={onClick}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z' fill='#869099' />
      </svg>
    </StyledExitButton>
  )
}

const Tag = ({tag}) => (
  <span style={{ backgroundColor: 'rgb(255, 255, 255)', display: 'inline-block', borderRadius: '4px', marginRight: '4px', padding: '2px 4px', lineHeight: 1.33, fontSize: '12px', color: 'rgb(0, 178, 91)', fontWeight: 'bold', fontFamily: 'arial' }}>
    {tag}
  </span>
)

const NavButton = ({ id, title, pathname, onClick, selected = false}) => {
  const { state } = useLocation();
  return (
    <Link to={{ pathname, state }} replace>
      <div style={{ borderWidth: '0px 2px 0px', borderColor: 'transparent', borderStyle: 'solid' }}>
        <StyledNavButton id={id} selected={selected} onClick={onClick}>
          <span>{title}</span>
        </StyledNavButton>
      </div>
    </Link>
  )
}

export { SaveButton, ShareButton, SlideButtonL, SlideButtonR, CarouselButtonL, CarouselButtonR, GalleryButton, ExitButton, NavButton, ScheduleButton, Tag, TourTypeButton, ScheduleRight, ScheduleLeft };