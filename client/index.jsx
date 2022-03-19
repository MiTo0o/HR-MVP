import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Dogs from './components/Dogs.jsx';
import Cats from './components/Cats.jsx';
import Foxes from './components/Foxes.jsx';
import Mostliked from './components/Mostliked.jsx';
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />}/>
          <Route path="/foxes" element={<Foxes />}/>
          <Route path="/top" element={<Mostliked />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));