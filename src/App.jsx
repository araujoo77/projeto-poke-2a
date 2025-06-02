import {Routes, Route} from 'react-router-dom'
import Home from './Home'

import Menu from './Menu'

const App = () => {

  return (
    <Routes>
      <Route index element={<Menu/>} />
      <Route path="/home" element={<Home/>} />

    </Routes>
  )
}

export default App
