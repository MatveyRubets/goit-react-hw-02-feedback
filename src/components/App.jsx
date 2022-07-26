import React, { Component } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = rating => {
    this.setState(prevRating => ({
      [rating]: prevRating[rating] + 1,
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
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave a feedback">
          <Feedback
            options={Object.keys(this.state)}
            onCountFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
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
