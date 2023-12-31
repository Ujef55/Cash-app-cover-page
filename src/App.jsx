import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Images from "./Components/Images";
import Footer from "./Components/Footer";
import FooterContent from "./Components/FooterContent";

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
      <Images />
       <Hero cash='CASH' app='APP'/>
       <Footer />
       <FooterContent appStore='APP STORE' playStore='PLAY STORE'/>
    </>
  )
}

export default App
