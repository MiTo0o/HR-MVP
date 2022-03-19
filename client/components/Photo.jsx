import React from 'react';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOuline } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: faHeartOuline
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const changedIcon = this.state.icon === faHeartOuline ? faHeart : faHeartOuline;
    const action = changedIcon === faHeartOuline ? 'decrease' : 'increase';
    fetch('/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: this.props.data, action: action})
    })
    this.setState({
      icon: changedIcon
    })
  }

  render() {
    return (
      <>
        <img src={this.props.data} key={this.props.data}></img>
        <div className="like-container">
          <span className="icon-button" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.icon} size='2x' style={{color: 'red'}}/>
          </span>
        </div>
      </>
    )
  }
}

export default Photo;