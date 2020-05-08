import React from 'react';
import ReactDOM from 'react-dom';

import CarouselFixed from '../carousels/carouselFixed.jsx';
import { SaveButton, ShareButton, ExitButton, NavButton } from '../buttons.jsx';
import { Flexbox } from '../styles.jsx';

const ContainerHeader = ({ routes }) => (
  <Flexbox style={{ padding: '8px 8px 0px' }}>
    <Flexbox className='item' style={{ flexBasis: '0px' }}>
      <CarouselFixed>
        {routes && routes.map(({ title, path }, idx) => (<NavButton key={idx} title={title} pathname={path} />))}
      </CarouselFixed>
    </Flexbox>
    <div>
      <div style={{ paddingLeft: '16px', display: 'inline-block' }}>
        <SaveButton />
        <ShareButton marginLeft='16px' />
      </div>
      <ExitButton />
    </div>
  </Flexbox>
)

export default ContainerHeader;