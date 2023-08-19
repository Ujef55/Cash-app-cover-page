import Navbar from "./Components/Navbar";
import CashText from "./Components/CashText";

function App() {

  return (
    <> 
      <Navbar signIn='SIGN IN'
       legal='LEGAL'
       sec='SECURITY'
       career='CAREERS'
       press='PRESS'
       support='SUPPORT'
       status='STATUS'
       codeBlog='CODEBLOG' />
       <CashText title='CASH'/>
    </>
  )
}

export default App
