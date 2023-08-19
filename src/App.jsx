import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
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
       <Hero cash='CASH' app='APP'/>
    </>
  )
}

export default App
