import './App.css';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import Form from './components/Form';

function App() {
  return (
    <div className='min-h-screen bg-orange-50'>
      <Navbar/>
      <div className='flex items-center justify-center mt-28 px-4'>
        <div className='flex flex-col md:flex-row  bg-white rounded-2xl shadow-lg w-full max-w-5xl'>
          <InfoSection className="w-full md:w-1/2"/>
          <Form className="w-full md:w-1/2"/>
        </div>  
      </div>
    </div>
  );
}

export default App;
