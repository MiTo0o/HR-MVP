import React from 'react';
import './Home.css';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar'>
        <a href="/">
          <button className='route-button'>
            Home
          </button>
        </a>
        <a href="/dogs">
          <button className='route-button'>
            Dogs
          </button>
        </a>
        <a href="/cats">
          <button className='route-button'>
            Cats
          </button>
        </a>
        <a href="/foxes">
          <button className='route-button'>
            Foxes
          </button>
        </a>
        <a href="/top">
          <button className='route-button'>
            Most Liked
          </button>
        </a>
      </div>
    )
  }
}

export default NavBar;
