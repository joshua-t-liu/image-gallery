import React from 'react';
import ReactDOM from 'react-dom';

const onHover = (color) => {
  return (event) => {event.target.style.backgroundColor = color};
}

const onMouseOut = (color = 'rgb(255, 255, 255)') => {
  return (event) => {event.target.style.backgroundColor = color};
}

const Save = () => (
  <button style={{ minWidth: '110px', borderColor: 'rgb(205, 209, 212)', padding: '8px 16px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', color: 'rgb(59, 65, 68)', fontSize: '16px'}} onMouseOver={onHover('rgb(232, 233, 234)')} onMouseOut={onMouseOut()}>
    <div style={{ display: 'flex', alignItems: 'center' }} >
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <path d='M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z' fill='#869099'></path>
      </svg>
      <span style={{ marginLeft: '8px' }}>Save</span>
    </div>
  </button>
);

const Share = () => (
  <button style={{ marginLeft: '16px', minWidth: '110px', display: 'inline-block', borderColor: 'rgb(205, 209, 212)', padding: '8px 16px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', color: 'rgb(59, 65, 68)', fontSize: '16px' }} onMouseOver={onHover('rgb(232, 233, 234)')} onMouseOut={onMouseOut()}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <path d='M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z' fill='#869099'></path>
      </svg>
      <span style={{ marginLeft: '8px' }}>Share</span>
    </div>
  </button>
);

const dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

const SlideButton = ({onClick, top, left, right}) => (
  <button style={{  position: 'absolute', height: '48px', width: '48px', padding: '1px', borderRadius: '24px', backgroundColor: 'rgb(59, 65, 68)', cursor: 'pointer', top: top, left: left, right: right, zIndex: 4, borderStyle: 'none' }} onClick={onClick} onMouseOver={onHover('rgb(134, 144, 153)')} onMouseOut={onMouseOut('rgb(59, 65, 68)')}>
    <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
      <path d={(left === 'auto') ? dRight : dLeft} fill='#869099' />
    </svg>
  </button>
)

const Gallery = ({ imageCount }) => (
  <button style={{ backgroundColor: 'rgba(59, 65, 68, 0.8)', color: 'rgb(255, 255, 255)', padding: '0px 8px', borderRadius: '4px', lineHeight: 1.5, borderStyle: 'none', display: 'flex', alignItems: 'center', height: '28px' }}>
    <svg viewBox='0 0 32 32' style={{ height: '16px', width: '16px' }}>
    <path d='M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z' fill='#869099'></path>
    </svg>
    <span style={{ marginLeft: '4px' }}>{imageCount}</span>
  </button>
);

const Exit = ({ hook }) => (
  <div style={{ width: '44px', height: "44px", alignItems: 'center', justifyContent: 'center', display: 'inline-flex' }} onClick={() => {ReactDOM.render(null, document.getElementById(hook))}}>
    <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
      <path d='M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z' fill='#869099' />
    </svg>
  </div>
)

const Nav = ({ title, selected = false}) => {
  const style = { padding: '8px 16px', marginBottom: '8px', borderWidth: '1px', borderStyle: 'none', borderColor: 'rgb(232, 233, 234)', color: 'rgb(59, 65, 68)', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', display: 'inline-block', lineHeight: 1.5, whiteSpace: 'nowrap' };

  if (selected) Object.assign(style, { borderStyle: 'solid', color: 'rgb(0, 120, 130)', boxShadow: 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px' })

  return (
    <div>
      <button style={style}>
        <span>{title}</span>
      </button>
    </div>
  )
}

const Schedule = ({ width = '100%', padding = '4px' }) => (
  <div style={{ padding: padding }}>
    <button style={{ width: width, backgroundColor: 'rgb(217, 60, 35)', lineHeight: 1.5, color: 'rgb(255, 255, 255)', fontSize: '16px', fontWeight: 'bold', padding: '8 16', borderStyle: 'none', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(217, 60, 35)', borderWidth: '1px' }}>Schedule a Tour</button>
  </div>
)
export { Save, Share, SlideButton, Gallery, Exit, Nav, Schedule };