import React from 'react';
import './Home.css';
import Photo from './Photo.jsx'
import NavBar from './NavBar.jsx';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true 
    }
  }

  componentDidMount() {
    fetch('/home-pics')
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
    return (
      <>
        <h1 className="header">Animal Gallery</h1>
        <NavBar />
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