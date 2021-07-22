import Footer from './components/Footer';
import TopNavbar from './components/Navbar/TopNavbar';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/NewsFeed/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'



function App() {

    
    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <Route  path='/' exact render={() => <ProfilePage/>} />
                <Route  path='/home' exact component={HomePage} />
                <Footer />
            </Router>
        </div>
    );

}


export default App;
