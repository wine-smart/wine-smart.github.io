import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';
import Results from '../Results';
import { Link } from 'react-router-dom';


function Result(props) {
  console.log(props)
  return (
    <div
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      {/* <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div> */}
      {/* <Link to={{pathname: '/results', state: {answers: props.chosenAnswers}}}>
        <div>Click here to see your personalized results!</div>
      </Link> */}
      
      
    </div>
  );
}

export default Result;
