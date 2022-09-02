import React from 'react';
import styles from './Layout.module.css';
import Question from './Question';
import AnswerList from './AnswerList';
import { useAtomValue } from 'jotai';
import { isFinalStepAtom } from './atoms';
import FinalStep from './FinalStep';

function App() {
  const isFinalStep = useAtomValue(isFinalStepAtom);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isFinalStep ? <FinalStep /> : <Question />}
      </div>
      <div className={styles.main}>
        <AnswerList />
      </div>
    </div>
  );
}

export default App;
