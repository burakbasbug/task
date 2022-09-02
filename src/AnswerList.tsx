import { useAtom } from 'jotai';
import { answersAtom } from './atoms';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ListItemIcon } from '@material-ui/core';

const AnswerList = () => {
  const [answers] = useAtom(answersAtom);
  return (
    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
      {answers.map((a) => (
        <ListItem alignItems="center" key={a.question.id}>
          <ListItemIcon style={{ width: '16rem' }}>
            {a.question.name}
          </ListItemIcon>
          <ListItemText
            primary={a.question.text}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {a.answerText.toString()}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}

      <Divider variant="inset" component="li" />
    </List>
  );
};

export default AnswerList;
