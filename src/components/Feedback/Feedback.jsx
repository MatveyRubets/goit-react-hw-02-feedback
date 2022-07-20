import PropTypes from 'prop-types';

const Feedback = ({ options, handleIncrement }) => {
  return (
    <>
      {options.map(rate => {
        return (
          <button key={rate} onClick={() => handleIncrement(rate)}>
            {rate}
          </button>
        );
      })}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Feedback;
