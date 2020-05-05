import React from 'react';
import ReactDOM from 'react-dom';

import { Save, Share, Exit, Nav } from './buttons.jsx';

const isOverFlowed = (event) => {
  event.target.clientWidth;
  evet.target.scrollWidth;
}

const Header = ({ hook, titles }) => (
  <div style={{ padding: '8px 8px 0px', color: 'rgb(59, 65, 68)', lineHeight: 1.5, fontSize: '16px', display: 'flex' }}>
    {/* should dynamically create tabs */}
    <div id='navbar' style={{ flex: '1 1 0px', display: 'flex', overflow: 'hidden' }} onClick={isOverFlowed}>
        {titles.map((title, idx) => <Nav title={title} selected={idx === 0}/>)}
    </div>

    <div>
      <div style={{ paddingLeft: '16px', display: 'inline-block' }}>
        <Save />
        <Share />
      </div>
      <Exit hook={hook}/>
    </div>
  </div>
)

export default Header;