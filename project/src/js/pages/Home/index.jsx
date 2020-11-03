import React, { useRef, useCallback, useEffect, useReducer } from 'react';
import cn from 'classnames';
import Bg from './Bg';
import Question from './Question';
import Ending from './Ending';
import stories from 'app/stories';
import { initState, reducer } from './store';
import styles from './index.module.scss';

const bgmAudio = 'https://hyncao.oss-cn-hangzhou.aliyuncs.com/audios/bgm.mp3';
const clickAudio =
  'https://hyncao.oss-cn-hangzhou.aliyuncs.com/audios/click.mp3';

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
    clickRef.current.currentTime = 0;
    bgmRef.current.volume = 0.5;
    clickRef.current.volume = 0.5;
    bgmRef.current.play();
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
  }, []);

  return (
    <div className={styles.content}>
      <audio src={bgmAudio} ref={bgmRef} loop="loop" />
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
