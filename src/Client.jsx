import React from 'react';

import Title from './shared/Title';
import Image from './shared/Image';

import './app.css';

// Here comes Client Router and common stuff from cloent
function Client() {
  return (
    <div className="Client">
      <Title />
      <Image />
    </div>
  );
}

export default Client;
