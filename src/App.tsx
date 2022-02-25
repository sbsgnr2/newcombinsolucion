import Home from './Home'
import Otherpage from './Otherpage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otherpage" element={<Otherpage />} />
      </Routes>
    </div>
  )
}

export default App
