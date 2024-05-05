import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return initialFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleResetClick = () => {
    setFeedback(() => {
      return { good: 0, neutral: 0, bad: 0 };
    });
  };

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        good="Good"
        neutral="Neutral"
        bad="Bad"
        reset="Reset"
        handleResetClick={handleResetClick}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
