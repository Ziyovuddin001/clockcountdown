import React, { useEffect, useContext } from 'react'
import Button from './components/Button'
import CountdownAnimation from './components/CountdownAnimation'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'

const App = () => {

  const {
    pomodoro: pomidor,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

  useEffect(() => { updateExecute(executing) }, [executing, startAnimate])

  return (
    <div className='box'>

      <div className="container">
        {pomidor !== 0 ?
          <>
            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomidor}
                  timer={pomidor}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className='box'>
              <div className="btnn">
                <Button title="Break" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
              </div>
              <div className='btnn'>
                <Button title="cancel" _callback={SettingsBtn} />
              </div>
            </div>
            <div className='boxx'>
              <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
            </div>
          </> : <SetPomodoro />}
      </div>
    </div>
  )
}

export default App
