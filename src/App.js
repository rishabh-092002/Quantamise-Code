import './App.css';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import Form from './components/Form';

function App() {
  return (
    <div className='min-h-screen bg-orange-50'>
      <Navbar/>
      <div className='flex items-center justify-center  top-[154px] left-[233px] mt-[160px]'>
        <div className='flex bg-white rounded-2xl shadow-lg w-3/4 max-w-5xl'>
          <InfoSection/>
          <Form/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
