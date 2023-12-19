
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react'
import Alerts from './components/Alerts';
import ToasterMsg from './components/ToasterMsg';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    switch (mode) {
      case 'light':
        setMode('dark');
        document.body.style.backgroundColor = '#052D74';
        showAlert('enable dark mode', "warning");
        document.title = "TextUtils DarkMode";
        break;
      case 'dark':
      default:
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('enable normal Mode', "success");
        document.title = "TextUtils Home";
        break;
    }
  }

  // Alert Message Configuration
  const [alertSms, setAlertSms] = useState(null);
  const showAlert = (message, type) => {
    setAlertSms({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlertSms(null);
      }, 1500)
  }
  // Toaster Message Configuration
  const [toasterSms, setToasterSms] = useState(null);
  const showToastestSms = (message, isDarkMode) => {
    setToasterSms({
      msg: message,
      mode: isDarkMode
    });
    setTimeout(() => {
      setToasterSms(null);
    }, 2000);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" homeText="home" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alertSms} />
      <ToasterMsg toaster={toasterSms}/>
      <div className="container">
        {/* Send Toaster Msg func to TestForm Component */}
        <TextForm mode={mode} showToastestSms={showToastestSms} headingText="Enter to text to analyze below" />
        <About />
      </div>
    </>
  );
}

export default App;
