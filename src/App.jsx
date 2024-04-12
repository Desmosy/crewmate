import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateCrewmateForm from './CreateCrewMateForm'
import CrewmateList from './CrewmateList'
import CrewmateInfo from './CrewmateInfo'
import SidebarMenu from './SideBarMenu'
import HomePage from './HomePage'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SidebarMenu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crewmates" element={<CrewmateList />} />
            <Route path="/crewmate/:id" element={<CrewmateInfo />} />
            <Route path="/create" element={<CreateCrewmateForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App