import React from 'react';
import './Home.css';
import Photo from './Photo.jsx'
import NavBar from './NavBar.jsx';

class Mostliked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('/most-liked')
      .then(res => res.json())
      .then((data) => {
        const el = document.querySelector(".loader-container");
        el.remove();
        this.setState({
          photos: data,
          loading: false
        })
      });
  }

  render() {
    const increment = Math.ceil(this.state.photos.length / 4)
    return (
      <>
        <h1 className="header">Most liked</h1>
        <NavBar />
        <div className="row">
          <div className="column">
            {this.state.photos.slice(0, increment).map((photo) =>
              <>
                <Photo data={photo.link}/>
                <p className='like-amount'>{photo.likes} {photo.likes > 1 ? 'Likes': 'Like'}</p>
              </>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(increment, increment * 2).map((photo) =>
              <>
                <Photo data={photo.link}/>
                <p className='like-amount'>{photo.likes} {photo.likes > 1 ? 'Likes': 'Like'}</p>
              </>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(increment * 2, increment * 3).map((photo) =>
              <>
                <Photo data={photo.link}/>
                <p className='like-amount'>{photo.likes} {photo.likes > 1 ? 'Likes': 'Like'}</p>
              </>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(increment * 3, increment * 4).map((photo) =>
              <>
              <Photo data={photo.link}/>
              <p className='like-amount'>{photo.likes} {photo.likes > 1 ? 'Likes': 'Like'}</p>
            </>
            )}


          </div>
        </div>
      </>
    )
  }
}

export default Mostliked;