import React, { useRef, useCallback, useEffect, useReducer } from 'react';
import cn from 'classnames';
import Bg from './Bg';
import Question from './Question';
import Ending from './Ending';
import stories from 'app/stories';
import { initState, reducer } from './store';
import bgmAudio from 'assets/audios/bgm.mp3';
import clickAudio from 'assets/audios/click.mp3';
import styles from './index.module.scss';

export default () => {
  const bgmRef = useRef();
  const clickRef = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const setState = (payload) =>
    dispatch({
      type: 'setState',
      payload,
    });

  const pickedFn = (index) => {
    setState({
      pickedAnswer: index,
      btnDisabled: false,
    });
  };

  const nextQuestion = useCallback(() => {
    let target = stories;
    let ending;
    state.answerList.forEach((i) => {
      const answer = target.answers.find((item) => item.value === i);
      if (answer.next) {
        target = answer.next;
      } else {
        ending = answer.ending;
      }
    });
    if (ending) {
      setState({
        endingText: ending,
      });
      return;
    }
    setState({
      questionInfo: target,
      showQuestion: true,
    });
  }, [state.answerList.toString()]);

  const submit = useCallback(async () => {
    if (state.btnDisabled) return;
    clickRef.current.play();
    const list = [...state.answerList, state.pickedAnswer];
    setState({
      answerList: list,
      showQuestion: false,
      btnDisabled: true,
    });
    console.log(list);
  }, [state.btnDisabled, state.answerList.toString(), state.pickedAnswer]);

  useEffect(() => {
    if (state.answerList.toString() !== '') {
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  }, [state.answerList.toString()]);

  useEffect(() => {
    setTimeout(() => {
      nextQuestion();
    }, 6000);
    bgmRef.current.play();
  }, []);

  return (
    <div className={styles.content}>
      <audio src={bgmAudio} autoPlay ref={bgmRef} />
      <audio src={clickAudio} ref={clickRef} />
      <Bg />
      <div className={styles.question}>
        <Question
          start={state.showQuestion}
          questionInfo={state.questionInfo}
          pickedFn={pickedFn}
        />
        <div
          className={cn(styles.btn, {
            [styles.active]: !state.btnDisabled,
            [styles.show]: state.showQuestion,
            [styles.hide]: !state.showQuestion,
          })}
          onClick={submit}
        >
          确定
        </div>
      </div>
      <Ending endingText={state.endingText} />
    </div>
  );
};
