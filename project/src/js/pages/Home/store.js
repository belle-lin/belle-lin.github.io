export const initState = {
  btnDisabled: true,
  pickedAnswer: null,
  showQuestion: false,
  answerList: [],
  questionInfo: null,
  endingText: null,
};

export const reducer = (state, action) => {
  if (action.type === 'setState') {
    return {
      ...state,
      ...action.payload,
    };
  }
};
