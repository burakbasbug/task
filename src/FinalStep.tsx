import React, { useEffect } from 'react';
import {
  Paper,
  Typography,
  WithStyles,
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core';
import { useAtomValue } from 'jotai';
import { answersAtom } from './atoms';
import { IAnswer } from './types';

const URL = 'https://virtserver.swaggerhub.com/L8475/task/1.0.1/conversation';

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

const sendData = async (answerList: IAnswer[]) => {
  const payload = answerList.map(({ question, answerValue }) => ({
    name: question.name,
    value: answerValue,
  }));
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  return fetch(URL, requestOptions);
};

interface Props extends WithStyles<typeof styles> {}

const FinalStep: React.FC<Props> = ({ classes }) => {
  const answerList = useAtomValue(answersAtom);

  useEffect(() => {
    sendData(answerList);
  });
  return (
    <Paper style={{}} elevation={1} className={classes.root}>
      <div>
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          style={{ padding: '0 8px' }}
        >
          Herzlichen Dank für Ihre Angaben
        </Typography>
      </div>
    </Paper>
  );
};
export default withStyles(styles)(FinalStep);
