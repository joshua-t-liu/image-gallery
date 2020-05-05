import React from 'react';

import { Schedule } from './buttons.jsx';

let inputStyle = { borderRadius: '8px', lineHeight: 1.5, fontSize: '16px', borderColor: 'rgb(205, 209, 212)', borderWidth: '1px', borderStyle: 'solid', padding: '8px', width: '100%' }

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
              <button style={{ borderRadius: '8px 0 0 8px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(0, 120, 130)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(0, 120, 130)', color: 'rgb(255, 255, 255)', fontSize: '16px', fontWeight: 'bold', padding: '8 16' }}>In-Person</button>
              <button style={{ borderRadius: '0 8px 8px 0', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(205, 209, 212)', width: '50%', lineHeight: 1.5, backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(59, 65, 68)', fontSize: '16px', fontWeight: 'bold', padding: '8 16' }}>Virtual</button>

            </div>
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
        </div>
      </form>
    </div>
  </div>
)

export default ScheduleTour;