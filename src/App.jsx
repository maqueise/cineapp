import { Container } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./pages/Home"
import './styles/globalStyle.css'
function App() {
  
  return (
    <>
      <Container>
        <Home/>
        <NavMenu/>
      </Container>
    </>
  )
}

export default App
