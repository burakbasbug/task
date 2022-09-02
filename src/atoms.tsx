import { atom } from 'jotai';
import { IAnswer, IQuestion } from './types';

const URL = 'https://mocki.io/v1/071ea124-59ad-48e0-a33f-042a4b63f26c';

export const flowAtom = atom(async () =>
  fetch(URL).then((resp) => resp.json() as Promise<IQuestion[]>)
);
export const answersAtom = atom<IAnswer[]>([]);
export const activeQuestionIdAtom = atom(100);

export const getActiveQuestionAtom = atom((get) =>
  get(flowAtom).find((qs) => qs.id === get(activeQuestionIdAtom))
);

export const isFinalStepAtom = atom(false);
