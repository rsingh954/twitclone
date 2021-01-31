import React, { useState } from "react";
import "./App.css";

import Timeline from "./components/Timeline";
import Search from "./components/Search";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import dog from "./assets/dog.jpg";
import News from "../src/views/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import articles from "./API";
import Header from './components/Header'
const App = () => {
  const [tweet, setTweet] = useState("");
  const [show, setShow] = useState(false);
  const [art, setArt] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (tweet === "") return;
    data.push({
      user_id: Date.now(),
      tweet: tweet,
      url: dog,
    });
    setTweet("");
  };

  const onClick = (e) => {
    setShow(true);
    show.valueOf();
    setArt(articles.articles[0]);
    console.log(articles.articles[0]);
  };
  return (

    <Router>

      <div className="App">
        <header role="banner" className="sidebar">
          <div className="links">
            <ul>
              <Link className="link" to="/">
                Home
              </Link>
              <Link to="/explore" className="link">
                Explore
              </Link>
              <Link onClick={onClick} to="/news" className="link">
                News
              </Link>
              <Link to="/profile" className="link">
                Profile
              </Link>
            </ul>
          </div>
        </header>
        <Search
          getQ={(e) => setTweet(e)}
          onSubmit={onSubmit}
          tweet={tweet}
          setTweet={setTweet}
        />
        <div className="content">
          <Switch>
            <Route path="/news">
              <News art={art} />
            </Route>
            <Route path="/" render={() => <Timeline data={data} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
