import { Outlet } from 'react-router-dom'; 
import { Header } from './components/Header'; 

function App() {
  return (
    <div>
      <Header title={"E-commerce"} />
      <Outlet />
    </div>
  )
}

export default App
