import React from 'react';
import ReactDOM from 'react-dom';

import PopUp from './popUp.jsx';
import Tag from './tag.jsx';
import { Save, Share, Gallery } from './buttons.jsx';

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
    .then(home => {
      this.setState({ home });
      console.log(home);
    })
    .catch(err => console.error(err));
  }

  onClick(event) {
    // open modal component
    ReactDOM.render(<PopUp home={this.state.home} hook={'popup'} />, document.getElementById('popup'));
  }

  // TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;

  render() {
    const { imageURLs, tagsProcessed } = this.state.home;

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', height: '500px', maxHeight: 'calc(100vh - 275px)', minHeight: '275px', overflow: 'hidden', borderRadius: '8px', width: '992px' }}>

          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <picture>
              {/* <source></source> */}
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={imageURLs[0]} onMouseOver={(event) => {event.target.style.transform = 'scale(1.04)'}} onMouseOut={(event) => {event.target.style.transform = 'scale(1.0)'}} onClick={this.onClick}/>
            </picture>
          </div>

          <div style={{ position: 'absolute', zIndex: 1, padding: '8px 8px 0px', display: 'flex', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ flex: '1 1 0' }}>
              {tagsProcessed.map(tag => (<Tag tag={tag}/>))}
            </div>
            <div style={{}}>
              <Save />
              <Share />
            </div>
          </div>

          {/* padding-left: calc(env(safe-area-inset-left) + 16px);
          padding-right: calc(env(safe-area-inset-right) + 8px); */}
          <div style={{ position: 'absolute', right: '0px', bottom: '8px', zIndex: 1, paddingRight: '8px' }}>
            <Gallery imageCount={imageURLs.length} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;