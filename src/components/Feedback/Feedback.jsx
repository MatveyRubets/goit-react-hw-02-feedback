import PropTypes from 'prop-types';

const Feedback = ({ options, onCountFeedback }) => {
  return (
    <>
      {options.map(rating => {
        return (
          <button key={rating} onClick={() => onCountFeedback(rating)}>
            {rating}
          </button>
        );
      })}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCountFeedback: PropTypes.func.isRequired,
};

export default Feedback;
