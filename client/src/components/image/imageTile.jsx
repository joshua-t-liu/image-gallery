import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { SaveButton, ShareButton, GalleryButton, Tag } from '../buttons.jsx';
import { Image, Absolute, Flexbox, Div } from '../styles.jsx';

const ImageTile = ({ home }) => {
  const { imageURLs, tagsProcessed } = home;
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
      <Div className='relative' style={{ height: '500px', maxHeight: 'calc(100vh - 275px)', minHeight: '275px', width: '992px', borderRadius: '8px' }}>

        <Link to={{ pathname: `${url}/photos`, state: { background: location } }}>
          <Absolute className='tall wide'>
            <picture>
              <source></source>
              <Image className='zoom' src={imageURLs[0]} />
            </picture>
          </Absolute>
          <Absolute right='0px' bottom='8px' style={{ zIndex: 1, paddingRight: '8px' }}>
            <GalleryButton title={imageURLs.length} />
          </Absolute>
        </Link>

        <Absolute className='wide' style={{ padding: '8px 8px 0px', zIndex: 1, boxSizing: 'border-box' }}>
          <Flexbox>
            <Div className='item' children={tagsProcessed.map((tag, idx) => (<Tag key={idx} tag={tag}/>))} />
            <div>
              <ThemeProvider theme={{ color: 'rgb(0, 120, 130)', borderStyle: 'none' }}>
                <SaveButton />
                <ShareButton marginLeft='16px' />
              </ThemeProvider>
            </div>
          </Flexbox>
        </Absolute>

      </Div>
  )
};

export default ImageTile;