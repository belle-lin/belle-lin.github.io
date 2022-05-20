import React, {
  useReducer,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { initState, reducer } from './store';
import Startup from './components/Startup';
import Tab from './components/Tab';
import Duorou from './components/Duorou';
import Hapi from './components/Hapi';
import styles from './index.module.scss';
import { setLS, getLS } from 'app/utils/utils';

const lsKey = 'idleState';

export default () => {
  const stateRef = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const setState = useCallback((payload) => dispatch({ payload }), []);

  const handleAnimationEnd = useCallback(() => {
    setState({ loading: false });
  }, [setState]);

  const handleTabClick = useCallback(
    (id) => {
      const tabList = state.tabList.map((i) => ({
        ...i,
        active: i.id === id ? true : false,
      }));
      setState({ tabList });
    },
    [setState, state.tabList]
  );

  const tabProps = useMemo(
    () => ({
      ...state,
      setState,
    }),
    [state]
  );

  useEffect(() => {
    const lsState = getLS(lsKey);
    try {
      const parsedState = JSON.parse(lsState);
      setState(parsedState);
    } catch (e) {
      console.error('数据缓存有误');
    }
  }, [setState]);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const time = setInterval(() => {
      setLS(lsKey, JSON.stringify({ ...stateRef.current, loading: true }));
      // TODO 刷新缓存间隔
    }, 10 * 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className={styles.container}>
      {state.loading ? (
        <Startup handleAnimationEnd={handleAnimationEnd} />
      ) : (
        <div className={styles.idle}>
          <div className={styles.total}>
            我已经 <span>{state.currentDay}</span> 天啦
          </div>
          <div className={styles.tabDetail}>
            {state.tabList.find((i) => i.active).id === 'duorou' ? (
              <Duorou {...tabProps} />
            ) : (
              <Hapi {...tabProps} />
            )}
          </div>
          <Tab
            className={styles.tabItem}
            list={state.tabList}
            currentDay={state.currentDay}
            handleTabClick={handleTabClick}
          />
        </div>
      )}
    </div>
  );
};
