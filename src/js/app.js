import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import '../styles/style.scss';
import homerAvatar from '../assets/homer.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello
        <img src={homerAvatar} alt="Homer Simpson" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
