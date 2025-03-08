import React from 'react'
import { useState } from 'react'

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmivalue, setBmivalue] = useState(0);
  const [bmiStatus, setBmiStatus] = useState('');

  const bmiCalculater = () => {
    const bmi = (weight / (height * height)).toFixed(2);
    setBmivalue(bmi);
    
    if (bmi < 18.5) {
      setBmiStatus('Underweight');
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiStatus('Normal weight');
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      setBmiStatus('Overweight');
    }
    else if (bmi >= 30) {
      setBmiStatus('Obesity');
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-pink-900 to-blue-900 text-white">
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm w-96">
        <h1 className="text-4xl font-bold text-center mb-8">BMI CALCULATOR</h1>
        
        <div className="mt-4 flex flex-col">
          <label htmlFor="weight" className="text-2xl mb-2">Weight (kg)</label>
          <input 
            type="number" 
            id="weight"
            className="bg-gray-800 text-white rounded-md px-4 py-2" 
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            value={weight}
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="height" className="text-2xl mb-2">Height (m)</label>
          <input 
            type="number" 
            id="height"
            className="bg-gray-800 text-white rounded-md px-4 py-2" 
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            value={height}
          />
        </div>

        <button 
          className="bg-blue-600 hover:bg-blue-700 mt-8 w-full text-xl py-2 rounded-md"
          onClick={bmiCalculater}
        >
          Calculate
        </button>

        <div className="mt-4 text-xl bg-gray-800 p-4 rounded-md">
          <h2>BMI: {bmivalue}</h2>
          <p>Status: {bmiStatus || "Calculation pending..."}</p>
        </div>
      </div>
    </div>
  )
}

export default App