import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { PreviousStateCounter } from './PreviousStateCounter'
import { SimpleCounter } from './SimpleCounter'
import { UserDashBoard } from './UserDashBoard'
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
    </>
  )
}

export default App
