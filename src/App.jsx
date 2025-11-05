import Header from './Header'
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './Footer'
import Plans from './pages/Plans'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/plans' element={<Plans />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>

                </Routes>
                <Footer />
            </Router >
        </>
    )
}

export default App
