import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(rating => {
        return (
          <button key={rating} onClick={() => onLeaveFeedback(rating)}>
            {rating}
          </button>
        );
      })}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
