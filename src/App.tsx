import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.css'
import Navbar from './components/Navbar'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={TodoPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </Router>
    </>
  ) 
}

export default App;
