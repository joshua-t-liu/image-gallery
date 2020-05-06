import React from 'react';
import { BrowserRouter as Router, Route, useLocation, useParams, useRouteMatch } from "react-router-dom";

import MainImage from './mainImage.jsx';
import Container from './container.jsx';
import { FlexContainer } from './styles.jsx';

const ModalSwitch = ({ home }) => {
  const location = useLocation();
  const { id } = useParams();
  const { url } = useRouteMatch();

  const background = location.state && location.state.background;

  return (
    <div>
      <Route path={url} children={(
        <FlexContainer style={{ justifyContent: 'center'}}>
          <MainImage home={home}/>
        </FlexContainer>
      )} />
      {background && <Route path={`${url}/:id`} children={<Container home={home} />} />}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: { imageURLs: [], tagsProcessed: [] } }
    this.pathname = window.location.pathname;
  }

  componentDidMount() {
    fetch(`${this.pathname}/images`)
    .then(response => response.json())
    .then(home => this.setState({ home }))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <Route path='/homes/:id' children={<ModalSwitch home={this.state.home} />} />
      </Router>
    );
  }
};

export default App;