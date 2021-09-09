import React from 'react';
import ReactDOM from 'react-dom';
import pro1 from './images/riot.png';
import pro2 from './images/marvel.jpg';
import pro3 from './images/ubisoft.jpg';
import img1 from './images/omen.png';
import img2 from './images/drstrange.jpg';
import img3 from './images/assassin.jpg';
import './index.css';

function Post(props) {

  return <div className="container">

    <img alt={props.name}
      src={props.profile}
      className="profile" align="left" />
    <span className="name" > {props.name} </span>
    <br />

    <span className="date" > {props.date} </span>
    <p className="text" > {props.text} </p>

    <img alt="post pic"
      src={props.pic}
      className="pic" />

    <p className="textbox">
      <span className="sp1">
        <a href="#" className="like1">Likes</a>
        <a href="#" className="like2">{props.likes}</a>
      </span>

      <span className="sp2">
        <a href="#" className="comment">{props.comments} comments</a>
        <a href="#" className="shares">{props.shares} shares</a>
      </span>

    </p>

    <p className="buttonbox">
      <button className="btn1">Like</button>
      <button className="btn2">Comments</button>
      <button className="btn3">Shares</button>
    </p>
  </div>
}

ReactDOM.render(
  <div className="main">
    <Post name="Riot Games"
      profile={pro1}
      date="2 months ago"
      text="A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next."
      pic={img1}
      likes="48M"
      comments="8M"
      shares="8M"
       />
    <Post name="Marvel"
      profile={pro2}
      date="8 days ago"
      text="Benedict Cumberbatch as Dr. Stephen Strange Releasing soon"
      pic={img2}
      likes="28M"
      comments="102M"
      shares="44M"
    />
    <Post name="Ubisoft"
      profile={pro3}
      date="4 years ago"
      text="Assassin's Creed Unity Finally Released"
      pic={img3}
      likes="1M"
      comments="100k"
      shares="60k"
    />
  </div>,
  document.querySelector('#root')
)