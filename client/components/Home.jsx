import React from 'react';
import './Home.css';
import Photo from './Photo.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('/random')
      .then(res => res.json())
      .then((data) => {
        this.setState({photos: data})
      });
  }

  render() {
    return (
      <>
        <h1 className="header">Dog Gallery</h1>
        <div className="row">
          <div className="column">
            {this.state.photos.slice(0, 10).map((photo) =>
              <Photo data={photo}/>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(10, 20).map((photo) =>
              <Photo data={photo}/>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(20, 30).map((photo) =>
              <Photo data={photo}/>
            )}
          </div>
          <div className="column">
            {this.state.photos.slice(30, 40).map((photo) =>
              <Photo data={photo}/>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Home;