import React from 'react';

import src from './allen_walker.jpg';

function Image() {
  return (
    <div className="Wrapper">
      <img src={src} className="Image" />
    </div>
  );
}

export default Image;
