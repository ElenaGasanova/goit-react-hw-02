const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </>
  );
};

export default Feedback;
