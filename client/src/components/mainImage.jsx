import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { Save, Share, Gallery, Tag } from './buttons.jsx';
import { StyledMainImage, Absolute, FlexContainer, StyledDiv as Div } from './styles.jsx';

const MainImage = ({ home }) => {
  const { imageURLs, tagsProcessed } = home;
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
      <Div className='relative' style={{ height: '500px', maxHeight: 'calc(100vh - 275px)', minHeight: '275px', borderRadius: '8px', width: '992px' }}>
        <Link to={{ pathname: `${url}/photos`, state: { background: location } }}>
          <Absolute className='tall wide'>
            <picture>
              <source></source>
              <StyledMainImage className='zoom' src={imageURLs[0]} />
            </picture>
          </Absolute>

          <Absolute right='0px' bottom='8px' style={{ zIndex: 1, paddingRight: '8px' }}>
            <Gallery imageCount={imageURLs.length} />
          </Absolute>
        </Link>

        <Absolute className='wide' style={{ padding: '8px 8px 0px', zIndex: 1, boxSizing: 'border-box' }}>
          <FlexContainer>
            <Div className='item'>
              {tagsProcessed.map((tag, idx) => (<Tag key={idx} tag={tag}/>))}
            </Div>
            <div>
              <ThemeProvider theme={{ color: 'rgb(0, 120, 130)', borderStyle: 'none' }}>
                <Save />
                <Share />
              </ThemeProvider>
            </div>
          </FlexContainer>
        </Absolute>
      </Div>
  )
}

export default MainImage;