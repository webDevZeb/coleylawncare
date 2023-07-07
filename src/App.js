import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
