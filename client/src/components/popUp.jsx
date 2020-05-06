import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Modal from './modal.jsx';
import Header from './header.jsx';
import ContainerMedia from './containerMedia.jsx';
import Map from './map.jsx';
import { FlexContainerCol } from './styles.jsx';


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
    const titles = ['Photos', 'Map', 'Street View', 'Schools', 'Crime', 'Commute', 'Shop & Eat'];
    const style = { backgroundColor: 'rgb(255, 255, 255)' };

    if (this.state.innerWidth > 767) Object.assign(style, { margin: '48px', height: 'calc(100% - 96px)', width: 'calc(100% - 96px)', borderRadius: '8px' });

    return (
      <Modal hook={hook}>
        <FlexContainerCol className='tall wide relative' style={style}>

          <Header hook={hook} titles={titles}/>

          {/* <ContainerMedia home={home} innerWidth={this.state.innerWidth}/> */}

          <Map />

        </FlexContainerCol>
      </Modal>
    )
  }
}

export default PopUp;