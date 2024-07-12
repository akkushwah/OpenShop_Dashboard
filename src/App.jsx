import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Example from './components/Example'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Product from './components/Product'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
          </Route>
          <Route path="/login" element={<div>This is login </div>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
