import Header from './Header'
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './Footer'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
                <Footer />
            </Router >
        </>
    )
}

export default App
