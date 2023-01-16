import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

import './Home.scss'

const Home = () => {
  return (
        <div className="home-container">
            <Sidebar/>
            <Tasks />
        </div>
  )
}

export default Home
