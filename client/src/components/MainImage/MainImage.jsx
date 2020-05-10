import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import Tag from './Tag.jsx';
import Image from './Image.jsx';
import GalleryButton from './GalleryButton.jsx';

import { SaveButton, ShareButton } from '../buttons.jsx';
import { Absolute, Flexbox, FlexItem } from '../styles.jsx';

const StyledMainImage = styled.div`
  position: relative;
  height: 500px;
  max-height: calc(100vh - 275px);
  min-height: 275px;
  width: 992px;
  border-radius: 8px;
`;

const MainImage = ({ home }) => {
  const { imageURLs, tagsProcessed } = home;
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
      <StyledMainImage>
        <Link to={{ pathname: `${url}/photos`, state: { background: location } }}>
          <Absolute className='tall wide' style={{ borderRadius: '8px' }}>
            <Image imageURL={imageURLs[0]} />
          </Absolute>
          <Absolute right='0px' bottom='8px' style={{ zIndex: 1, paddingRight: '8px' }}>
            <GalleryButton count={imageURLs.length} />
          </Absolute>
        </Link>
        <Absolute className='wide' style={{ padding: '8px 8px 0px', zIndex: 1, boxSizing: 'border-box' }}>
          <Flexbox>
            <FlexItem children={tagsProcessed.map((tag, idx) => (<Tag key={idx} tag={tag}/>))} />
            <div>
              <ThemeProvider theme={{ color: 'rgb(0, 120, 130)', borderStyle: 'none' }}>
                <SaveButton />
                <ShareButton marginLeft='16px' />
              </ThemeProvider>
            </div>
          </Flexbox>
        </Absolute>
      </StyledMainImage>
  )
};

export default MainImage;