import React from 'react';

import team from '../../../assets/team.png';
import team1 from '../../../assets/team1.png';
import team2 from "../../../assets/team2.png";
import './Home3.css';

function Home3() {
  return (
    <div className="home3">
      <div className="category">
        <div className="heading-2">
          What we do
          <hr className="line-2" />
        </div>
      </div>
      <div className="cardContainer">
        <div className="card-1" style={{ marginLeft: '25px' }}>
          <img className="card-img" src={team} alt="Card" />
          <div className="card-body">
            <p className="card-text1">
              VOLUNTEERING
              <p className="card-text2">
                Our work is never done, and we can use all the help we can get. One of the ways you can take part is by
                Volunteering. Spread the word about all that www.globaleducationtrust.org is doing, and help us gain the
                support we need.
              </p>
            </p>
          </div>
        </div>
        <div className="card-1">
          <img className="card-img" src={team1} alt="Card" />
          <div className="card-body">
            <p className="card-text1">
              PLANNING A FUNDRAISER
              <p className="card-text2">
                Active participation is an essential part of our movement’s success. Planning a Fundraiser is a great
                way to connect with your local community and spread the importance of our mission. With several
                different campaigns, it is easy to find something that personally inspires you.
              </p>
            </p>
          </div>
        </div>

        <div className="card-1">
          <img className="card-img" src={team2} alt="Card" />
          <div className="card-body">
            <p className="card-text1">
              ORGANIZING AN EVENT
              <p className="card-text2">
                Every individual has the ability to motivate others and inspire true change. By Organizing an Event, you
                become a crucial part of our movement by making sure that our mission is heard and has a far-reaching,
                lasting impact.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3;
