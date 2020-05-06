import React from 'react';

import { Schedule } from './buttons.jsx';
import CarouselFixed from './carouselFixed.jsx';

let inputStyle = { borderRadius: '8px', lineHeight: 1.5, fontSize: '16px', borderColor: 'rgb(205, 209, 212)', borderWidth: '1px', borderStyle: 'solid', padding: '8px', width: '100%', boxSizing: 'border-box' }

const right = (
  <div style={{ position: 'absolute', top: 'calc(50% - 16px)', right: '-16px' }}>
    <button style={{ height: '32px', width: '32px', borderColor: 'rgb(232, 233, 234)', borderRadius: '24px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer' }}>
      <svg className="svg" viewBox="0 0 32 32">
        <path d='M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z' fill="#869099"></path>
      </svg>
    </button>
  </div>
);

const left = (
  <div style={{ position: 'absolute', top: 'calc(50% - 16px)', left: '-16px' }}>
    <button style={{ height: '32px', width: '32px', borderColor: 'rgb(232, 233, 234)', borderRadius: '24px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer' }}>
      <svg className="svg" viewBox="0 0 32 32">
        <path d='M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z' fill="#869099"></path>
      </svg>
    </button>
  </div>
);


const ScheduleTour = (props) => (

  <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', marginTop: '24px' }}>
    <div style={{ fontWeight: 'bold', fontSize: '20px', color: 'rgb(59, 65, 68)', lineHeight: 1.2, marginBottom: '8px' }}>
      Schedule A Tour
    </div>

    <div>
      <form onSubmit={() => {}}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'rgb(134, 144, 153)', display: 'inline-flex', alignItems: 'center', padding: '4px' }}>
            <div>Tour Type</div>
            <div style={{ height: '24px', width: '24px', marginLeft: '4px' }}>
              <svg viewBox="0 0 32 32">
                <path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099"></path>
              </svg>
            </div>
          </div>

          <div style={{ padding: '4px' }}>
            <div style={{ display: 'flex' }}>
              <button style={{ borderRadius: '8px 0 0 8px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(0, 120, 130)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(0, 120, 130)', color: 'rgb(255, 255, 255)', fontSize: '16px', fontWeight: 'bold', padding: '8px 16px' }}>In-Person</button>
              <button style={{ borderRadius: '0 8px 8px 0', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(205, 209, 212)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(59, 65, 68)', fontSize: '16px', fontWeight: 'bold', padding: '8px 16px' }}>Virtual</button>
            </div>
          </div>

          {/* left={left} right={right} */}
          <div style={{ padding: '4px', position: 'relative' }}>
            <CarouselFixed style={{ marginLeft: '-4px', marginRight: '-4px' }} >
              {Array(7).fill({ day: 'Tue', date: '5', month: 'May' }).map((slot, idx) => {
                return (
                  <div style={{ borderSize: '8px 4px 0px', width: '25%', borderStyle: 'solid', borderColor: 'transparent', boxSizing: 'border-box' }}>
                    <button style={{ borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', padding: '8px', borderWidth: '1px', borderColor: 'rgb(205, 209, 212)', width: '100%', borderStyle: 'solid', lineHeight: 1.4, fontSize: '14px', fontFamily: 'arial', cursor: 'pointer' }}>
                      <div>{slot.day}</div>
                      <div style={{ fontWeight: 'bold', lineHeight: 1.2, fontSize: '20px' }}>{idx}</div>
                      <div>{slot.month}</div>
                    </button>
                  </div>
                )
              })}
            </CarouselFixed>
          </div>

          <div style={{ display: 'flex', padding: '4px' }}>
            <div>
              <input style={inputStyle} type='text' placeholder='Name'/>
            </div>
            <div style={{ paddingLeft: '8px' }}>
            <input style={inputStyle} type='text' placeholder='Phone'/>
            </div>
          </div>
          <div style={{ padding: '4px' }}>
            <input style={inputStyle} type='text' placeholder='Email'/>
          </div>
          <div>
            {/* checkbox */}
          </div>
          <Schedule />
          <div style={{ padding: '4px', color: 'rgb(134, 144, 153)', fontSize: '10px', lineHeight: 1.6 }}>
            <span>By pressing Schedule A Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use  Trulia does not endorse any real estate professionals </span>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default ScheduleTour;