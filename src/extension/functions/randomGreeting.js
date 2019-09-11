import globals from '../globals'
import rot13 from './rot13'
import simpleHash from './simpleHash'

const randomGreeting = () => {
  const changeEveryHalfDay = Math.floor(Date.now() / (1000 * 60 * 60 * 12))
  const rndData = simpleHash(
    changeEveryHalfDay + parseInt(globals.userid, 10) + 178889
  )
  return rot13(globals.greetings[rndData % globals.greetings.length])
}

export default randomGreeting
