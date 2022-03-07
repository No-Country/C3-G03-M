import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <header className="header">
        <div>{!sidebar ? <FiMenu onClick={handleSidebar} /> : <FiX onClick={handleSidebar} />}</div>
      </header>
      <Sidebar sidebar={sidebar} />
    </>
  )
}

export default App
