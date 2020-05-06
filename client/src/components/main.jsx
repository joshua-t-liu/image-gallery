import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

import PopUp from './popUp.jsx';
import { Save, Share, Gallery, Tag } from './buttons.jsx';
import { MainImage, Absolute, FlexContainer, StyledDiv as Div } from './styles.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home: {imageURLs: [], tagsProcessed: []}};
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const url = window.location.pathname;
    fetch(`${url}/images`)
    .then(response => response.json())
    .then(home => this.setState({ home }))
    .catch(err => console.error(err));
  }

  onClick(event) {
    ReactDOM.render(<PopUp home={this.state.home} hook={'popup'} />, document.getElementById('popup'));
  }

  render() {
    const { imageURLs, tagsProcessed } = this.state.home;

    return (
      <FlexContainer style={{ justifyContent: 'center'}}>
        <Div className='relative' style={{ height: '500px', maxHeight: 'calc(100vh - 275px)', minHeight: '275px', borderRadius: '8px', width: '992px' }}>

          <Absolute className='tall wide'>
            <picture onClick={this.onClick}>
              <source></source>
              <MainImage className='main' src={imageURLs[0]} />
            </picture>
          </Absolute>

          <Absolute className='wide' style={{ padding: '8px 8px 0px', zIndex: 1, boxSizing: 'border-box' }}>
            <FlexContainer>
              <Div className='item'>
                {tagsProcessed.map(tag => (<Tag tag={tag}/>))}
              </Div>
              <div>
                <ThemeProvider theme={{ color: 'rgb(0, 120, 130)', borderStyle: 'none' }}>
                  <Save />
                  <Share />
                </ThemeProvider>
              </div>
            </FlexContainer>
          </Absolute>

          {/* padding-left: calc(env(safe-area-inset-left) + 16px);
          padding-right: calc(env(safe-area-inset-right) + 8px); */}
          <Absolute right='0px' bottom='8px' style={{ zIndex: 1, paddingRight: '8px' }}>
            <Gallery imageCount={imageURLs.length} />
          </Absolute>
        </Div>
      </FlexContainer>
      )
  }
}

export default Main;