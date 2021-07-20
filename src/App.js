
import './App.css';
import Footer from './components/Footer';
import TopNavbar from './components/Navbar/TopNavbar';
import ProfilePage from './components/ProfilePage';



function App() {
    return (
        <div className="App">
            <TopNavbar/>
            <ProfilePage/>
            <Footer/>
        </div>
    );

}

export default App;
