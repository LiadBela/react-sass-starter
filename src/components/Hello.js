import React from 'react';
import { Component } from 'react';
import '../styles/style.scss';
import homerAvatar from '../assets/homer.jpg';

class Hello extends Component {
  render() {
    return (
      <div>
        Hello
        <img src={homerAvatar} alt="Homer Simpson" />
      </div>
    );
  }
}

export default Hello; 