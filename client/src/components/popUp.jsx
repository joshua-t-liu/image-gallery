import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './modal.jsx';
import Header from './header.jsx';
import ImageContainer from './imageContainer.jsx';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {innerWidth: window.innerWidth};
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  resize(event) {
    this.setState({ innerWidth: window.innerWidth })
  }

  render() {
    const { hook, home } = this.props;
    const style = { display: 'flex', flexDirection: 'column', height: '100%', width: '100%', backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Arial', overflow: 'hidden', position: 'relative' };

    if (this.state.innerWidth > 767) Object.assign(style, { margin: '48px', height: 'calc(100% - 96px)', width: 'calc(100% - 96px)', borderRadius: '8px' });

    return (
      <Modal hook={hook}>
        <div style={style}>

          <Header hook={hook} titles={['Photos', 'Map', 'Street View', 'Schols', 'Commute', 'Shop & Eat']}/>

          <ImageContainer home={home} innerWidth={this.state.innerWidth}/>

        </div>
      </Modal>
    )
  }
}

export default PopUp;