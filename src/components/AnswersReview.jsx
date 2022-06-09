import { Paper, Button, Typography } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { createMarkup } from "../helpers";

const AnswersReview = ({ processedAnswers, classNamees, resetQuiz }) => {
  const renderAnswers = (answers) => {
    return answers.map(
      ({ question, isCorrect, correctAnswer, wrongAnswer }) => (
        <Paper key={question} classNameName={classNamees.paper}>
          <Typography variant="h2" classNameName={classNamees.question}>
            <span dangerouslySetInnerHTML={createMarkup(question)} />
          </Typography>

          {isCorrect ? (
            <Typography
              variant="h2"
              classNameName={`${classNamees.answer} ${classNamees.correctAnswer}`}
            >
              <Check />
              <span
                classNameName={classNamees.answer}
                dangerouslySetInnerHTML={createMarkup(correctAnswer)}
              />
            </Typography>
          ) : (
            <>
              <Typography
                variant="h3"
                color="secondary"
                classNameName={classNamees.answer}
              >
                <Close />
                <span
                  classNameName={classNamees.answer}
                  dangerouslySetInnerHTML={createMarkup(wrongAnswer)}
                />
              </Typography>
              <Typography
                variant="h3"
                classNameName={`${classNamees.answer} ${classNamees.correctAnswer}`}
              >
                <Check />
                <span
                  classNameName={classNamees.answer}
                  dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                />
              </Typography>
            </>
          )}
        </Paper>
      )
    );
  };

  return (
    <>
      <Typography variant="h1" classNameName={classNamees.mainTitle}>
        Answers review:
      </Typography>
      {renderAnswers(processedAnswers)}
      <Button
        classNameName={classNamees.submitButton}
        onClick={resetQuiz}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </>
  );
};

export default AnswersReview;
