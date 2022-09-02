export interface ValueOption {
  nextId: number | false;
  value: string | boolean | number;
  text: string;
}

export interface IQuestion {
  id: number;
  name: string;
  text: string;
  uiType: string;
  valueType: string;
  valueOptions: ValueOption[];
}

export interface IAnswer {
  question: IQuestion;
  answerValue: string | boolean | number;
  answerText: string;
}
