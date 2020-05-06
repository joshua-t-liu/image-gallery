import React from 'react';
import ReactDOM from 'react-dom';

import CarouselFixed from './carouselFixed.jsx';
import { Save, Share, Exit, Nav } from './buttons.jsx';
import { FlexContainer } from './styles.jsx';

const Header = ({ routes }) => (
  <FlexContainer style={{ padding: '8px 8px 0px' }}>
    <FlexContainer className='item' style={{ flexBasis: '0px' }}>
      <CarouselFixed>
        {routes.map(({ title, path }) => (<Nav title={title} path={path} />))}
      </CarouselFixed>
    </FlexContainer>
    <div>
      <div style={{ paddingLeft: '16px', display: 'inline-block' }}>
        <Save />
        <Share />
      </div>
      <Exit />
    </div>
  </FlexContainer>
)

export default Header;