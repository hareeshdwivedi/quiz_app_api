import { Button, Typography } from "@material-ui/core";
import AnswersReview from "./AnswersReview";
import { useEffect } from "react";

const TotalResults = ({
  classNamees,
  resetQuiz,
  currentQuizStep,
  processedAnswers,
  setCurrentQuizStep,
}) => {
  useEffect(() => {
    window.scrollTo(0, "20px");
  }, []);
  return currentQuizStep === "results" ? (
    <div classNameName={classNamees.results}>
      <Typography variant="h1" classNameName={classNamees.mainTitle}>
        Results
      </Typography>
      <Typography variant="h4">
        {processedAnswers.filter(({ isCorrect }) => isCorrect).length} out of{" "}
        {processedAnswers.length}
      </Typography>
      <Button
        onClick={(e) => {
          setCurrentQuizStep("review");
        }}
        classNameName={classNamees.submitButton}
        variant="contained"
        color="primary"
      >
        Review
      </Button>{" "}
      <Button
        onClick={resetQuiz}
        classNameName={classNamees.submitButton}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </div>
  ) : (
    <AnswersReview
      classNamees={classNamees}
      resetQuiz={resetQuiz}
      processedAnswers={processedAnswers}
    />
  );
};

export default TotalResults;
