import './App.css'
import { BatchingCounter } from './BatchingCounter'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { PreviousStateCounter } from './PreviousStateCounter'
import { SimpleCounter } from './SimpleCounter'
import { UserDashBoard } from './UserDashBoard'
import { UserProfile } from './UserPorfile'
function App() {
  

  return (
    <>
      <h1>BlexedPritam is here !!</h1>
      <Counter/>
      <Counter/>
      <LoginCard/>
      <UserDashBoard/>
      <SimpleCounter/>
      <PreviousStateCounter/>
      <BatchingCounter/>
      <UserProfile/>
    </>
  )
}

export default App
