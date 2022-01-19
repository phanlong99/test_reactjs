import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import "./App.css";
import { PersonList, getData } from "./services/NetworkHelper";
import { useState, useEffect } from "react";

const App = () => {
  const [ywbDatas, setYwbDatas] = useState({});

  const fetchData = async () => {
    let arr = await getData();
    setYwbDatas(arr);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <div className='App'>
        <ul className='App-header'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <ul>
          {ywbDatas?.domains?.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    </Router>
  );
};

export default App;
