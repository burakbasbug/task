import React from 'react';
import {
  Paper,
  Typography,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Button,
} from '@material-ui/core';
import { useAtom, useAtomValue } from 'jotai';
import { IQuestion, ValueOption } from './types';
import {
  activeQuestionIdAtom,
  answersAtom,
  getActiveQuestionAtom,
  isFinalStepAtom,
} from './atoms';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: `8px solid ${theme.palette.common.white}`,
      margin: 16,
      padding: '4rem',
      outline: '1px solid black',
      background: `rgba(255,255,255,0.9)`,
      boxShadow:
        '0 20px 25px -5px rgb(0 0 0 / 0.1) 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      width: '700px',
    },
    navigation: {
      width: 110,
      fontSize: 12,
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
        width: 90,
      },
    },
    prevBtn: {
      color: theme.palette.grey[700],
      background: theme.palette.common.white,
      boxShadow: theme.shadows[5],
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Question: React.FC<Props> = ({ classes }) => {
  const [, setActiveQuestionId] = useAtom(activeQuestionIdAtom);
  const activeQuestion = useAtomValue(getActiveQuestionAtom) as IQuestion;
  const [answers, setAnswers] = useAtom(answersAtom);
  const [, setIsFinalStepAtom] = useAtom(isFinalStepAtom);
  const handler = (valueOption: ValueOption) => {
    setAnswers([
      {
        question: activeQuestion,
        answerValue: valueOption.value,
        answerText: valueOption.text,
      },
      ...answers,
    ]);
    if (valueOption.nextId) setActiveQuestionId(valueOption.nextId);
    if (!valueOption.nextId) {
      setIsFinalStepAtom(true);
    }
  };

  return (
    <Paper style={{}} elevation={1} className={classes.root}>
      <div>
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          style={{ padding: '0 8px' }}
        >
          {activeQuestion?.text}
        </Typography>

        {activeQuestion?.valueOptions.map((valueOption) => {
          return (
            <Button key={valueOption.text} onClick={() => handler(valueOption)}>
              {valueOption.text}
            </Button>
          );
        })}
      </div>
    </Paper>
  );
};
export default withStyles(styles)(Question);
