import React from 'react'
import { Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Results from './Results'
import './index.css';


class Quiz1 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {},
          result: '',
          chosenAnswers: [],
          firstChoice: '',
          secondChoice: '',
          thirdChoice: ''
        };
    
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      }
    
      componentDidMount() {
        const answerOptions = quizQuestions.map(question =>
          question.answers
        );
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: answerOptions[0]
        });
      }
    
      handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
    
        if (this.state.questionId < quizQuestions.length) {
          setTimeout(() => this.setNextQuestion(), 300);
        } else {
          setTimeout(() => this.setResults(this.getResults()), 300);
        }
      }
    
      setUserAnswer(answer) {
        this.setState((state, props) => ({
          answersCount: {
            ...state.answersCount,
            [answer]: (state.answersCount[answer] || 0) + 1
          },
          answer: answer,
          chosenAnswers: this.state.chosenAnswers.concat({answer})
        }));
      }
    
      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }
    
      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
      }
    
      setResults(result) {
        if (result.length === 1) {
          this.setState({ result: result[0] });
        } else {
          this.setState({ result: 'Undetermined' });
        }
      }
    
      renderQuiz() {
        return (
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
            chosenAnswers={this.chosenAnswers}
          />
        );
      }
    
      renderResult() {
        return <Results chosenAnswers={this.state.chosenAnswers}  />;
      }
    
      render() {

        return (
          <>
          <>
            <Navbar bg="light" variant="light">
                <Link to="/#home">
                    <Navbar.Brand href="#home">WineSmart</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
            
                <Link to="/#home">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/quiz1">
                    <Nav.Link href="#features">Take the Quiz!</Nav.Link>
                </Link>
                <Link to="/results">
                    <Nav.Link href="#recommendations">Recommendations</Nav.Link>
                </Link> 
                </Nav>
            </Navbar>
            </>

          <div className = "Quiz1">
            {this.state.result ? <Redirect to={{pathname: '/results', state: {chosenAnswers: this.state.chosenAnswers}}}>
              {/* <div>Click here to see your personalized results!</div> */}
              </Redirect> 
              : this.renderQuiz()}
          </div>
          </>
        );

      }
}
export default Quiz1;