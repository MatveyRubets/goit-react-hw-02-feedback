import React, { Component } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
// import Counter from './Counter/Counter';
// import DropDown from './DropDown/DropDown';
// import ToDoList from './ToDoList/ToDoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#606D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = rate => {
    this.setState(prevState => ({
      [rate]: prevState[rate] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return (this.state.good / this.countTotalFeedback()) * 100;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback();
    const ratio = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave a feedback">
          <Feedback
            options={Object.keys(this.state)}
            handleIncrement={this.increment}
          />
        </Section>

        <Section title="Statistics">
          {sum ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={sum}
              positiveFeedback={ratio}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
