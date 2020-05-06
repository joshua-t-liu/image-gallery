import React from 'react';
import styled from 'styled-components';

import { StyledDiv as Div, Absolute } from './styles.jsx';

const Button = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;

class CarouselFixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      position: 0,
      clipped: false,
      shift: 0,
      max: 0,
    };
    this.onClick = this.onClick.bind(this);
    this.onShift = this.onShift.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.carousel = document.getElementById('carousel-fixed');
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  resize(event) {
    let size = 0;
    this.carousel.childNodes.forEach(child => {size += child.scrollWidth});
    this.setState({ clipped: (this.carousel.scrollWidth - this.carousel.clientWidth) > 0, max: 100 * (size / this.carousel.clientWidth - 1) })
  }

  onShift(dir = 1) {
    const component = this;
    const range = (val) => (Math.max(0, Math.min(val, this.state.max)));
    return function (event) {
      const carousel = component.carousel;
      component.setState((state) => ({ shift: range(state.shift + dir * 100) }), () => {carousel.style.transform = `translateX(-${component.state.shift}%)`});
    }
  }

  onClick(event) {
    const id = event.target.parentElement.id;
    this.setState({ selected: parseInt(id) });
  }

  render() {
    const { clipped, shift, left, right } = this.state;

    return (
    <Div className='relative'>

        {/* boxShadow: 'rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px' */}
      {(clipped && shift < this.state.max)  &&
      <Absolute top='7px' right='0px' style={{ zIndex: 1 }}>
        <Button onClick={this.onShift()}>
          <div>
            <svg className='svg' viewBox='0 0 32 32'>
              <path d='M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z' fill='#869099'></path>
            </svg>
          </div>
        </Button>
      </Absolute>}

      {(clipped && shift > 0)  &&
      <Absolute top='7px' left='0px' style={{ zIndex: 1 }}>
        <Button onClick={this.onShift(-1)}>
          <div>
            <svg className='svg' viewBox='0 0 32 32'>
              <path d='M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z' fill='#869099 '></path>
            </svg>
          </div>
        </Button>
      </Absolute>}

      <div id='carousel-fixed' style={{ display: 'flex' }}>
        {React.Children.map(this.props.children, (child, idx) => {
          const props = {
            id: idx,
            className: 'item',
            style: Object.assign({}, child.props.style, { flexShrink: 0 }),
            onClick: this.onClick,
            selected: this.state.selected === idx,
          };
          return React.cloneElement(child, props);
        })}
      </div>

    </Div>
    )
  }
}

export default CarouselFixed;