import React from 'react';

import Slide from './slide.jsx';
import { SlideButton } from './buttons.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  onClickLeft(event) {
    event.preventDefault();
    this.setState((state, props) => {
      const { imageURLs } = props.home;
      if (!state.index) return { index: imageURLs.length - 1 };
      return { index: state.index - 1 };
    })
  }

  onClickRight(event) {
    event.preventDefault();
    this.setState((state, props) => {
      const { imageURLs } = props.home;
      return { index: (state.index + 1) % imageURLs.length };
    })
  }

  render() {
    const { address, price, rooms, imageURLs } = this.props.home;
    const left = (this.state.index -1 < 0) ? imageURLs.length - 1 : this.state.index -1;
    const center = this.state.index;
    const right = (this.state.index + 1) % imageURLs.length;
    const pipe = <span style={{ margin: '0px 8px' }}>|</span>
    const offset = (this.props.innerWidth < 898) ? { marginRight: '308px' } : {};

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* buttons */}
        <div>
          <SlideButton top={'calc(50% - 12px)'} left={'20px'} right={'auto'} onClick={this.onClickLeft}/>
          <SlideButton top={'calc(50% - 12px)'} left={'auto'} right={'20px'} onClick={this.onClickRight}/>
        </div>

        {/* images */}
        <div style={{ display: 'flex', flex: '1 1 0', heigh: '100%', position: 'relative', zIndex: 0 }}>
          <Slide key={center} shift={'0%'} src={imageURLs[center]} zIndex={2}/>
          <Slide key={right} shift={'100%'} src={imageURLs[right]} zIndex={1}/>
          <Slide key={left} shift={'-100%'} src={imageURLs[left]} zIndex={1}/>
        </div>

        {/* footer */}
        <div style={{ lineHeight: 1.43, display: 'flex', fontSize: '14px', alignItems: 'center', borderTop: '1px solid rgb(134, 144, 153)' }}>
          <div style={{ padding: '16px', color: 'rgb(255, 255, 255)' }}>
            <span>{`${this.state.index + 1}/${imageURLs.length}`}</span>
          </div>
          <div style={Object.assign({ textAlign: 'center', flex: '1 1 auto', padding: '8px 0px', color: 'rgb(255, 255, 255)' }, offset)}>
            {[price, rooms].reduce((accum, ele) => accum.concat(<span>{pipe}{ele}</span>), [<span>{address}</span>])}
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;