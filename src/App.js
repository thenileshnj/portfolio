import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import ProfileCard from './components/ProfileCard';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <div className=' bg-gray-200'>
        <ProfileCard/>
        <About/>
        <Services/>
        <Tech/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
