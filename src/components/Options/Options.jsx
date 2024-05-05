const Options = ({
  good,
  neutral,
  bad,
  reset,
  updateFeedback,
  totalFeedback,
  handleResetClick,
}) => {
  return (
    <>
      <ul>
        <li>
          <button onClick={() => updateFeedback(good.toLowerCase())}>
            {good}
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback(neutral.toLowerCase())}>
            {neutral}
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback(bad.toLowerCase())}>
            {bad}
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={() => handleResetClick()}>{reset}</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
