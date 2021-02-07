import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div className=''>
    <p className='f3'> This Magic Brain will detect faces in your pictures. Git it a try.</p>
    <div className='center form pa4 br3 shadow-5'>
      <input
        placeholder='put a face image url'
        type='text'
        className='f6 pa2 w-70 center'
        onChange={onInputChange}
      />
      <button
        className='w-30 grow f4 link ph3 pv2 dib  white bg-light-purple'
        onClick={onButtonSubmit}>
        Detect
      </button>
    </div>
  </div>
);

export default ImageLinkForm;
