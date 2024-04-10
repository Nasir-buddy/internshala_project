import "./App.css";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage"
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/FifthPage";
import SixthPage from "./Pages/SixthPage";
import SeventhPage from "./Pages/SeventhPage";
import { useEffect, useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  useEffect(()=>{
    if(step !== 6) return
    const timeout = setTimeout(()=>{
        setStep(7);
    }, 2000);
    return ()=> clearTimeout(timeout);
  },[step]);

  return <div className="App">
    {
      step === 1 ? <FirstPage setstep={setStep} /> :
        step === 2 ? <SecondPage setstep={setStep} /> :
          step === 3 ? <ThirdPage setstep={setStep} /> :
            step === 4 ? <FourthPage setstep={setStep} /> :
              step === 5 ? <FifthPage setstep={setStep} /> :
                step === 6 ? <SixthPage /> :
                  <SeventhPage />
    }
  </div>
}

export default App;
