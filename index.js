import React, { useState } from 'react';

export default function Home() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const checkPassword = () => {
    if (passwordInput === 'empower2025') {
      setAccessGranted(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow text-center w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4">Access Protected</h1>
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 w-full mb-4 rounded"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button onClick={checkPassword} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-3xl mx-auto text-center">
        <img src="/logo.png" alt="Empowering Patients GPT Logo" className="mx-auto mb-6 w-32 h-32" />
        <h1 className="text-3xl font-bold mb-2">Empowering Patients GPT</h1>
        <p className="text-lg mb-6">Take control of your care with AI-powered support</p>

        <div className="bg-blue-50 p-4 rounded-xl shadow mb-8">
          <p className="text-base mb-3">This assistant helps you:</p>
          <ul className="list-disc list-inside text-left">
            <li>Check if you’re eligible to restart home health, DME, or hospice</li>
            <li>Upload redacted doctor’s notes for a personalized review</li>
            <li>Generate summaries to bring to your next doctor visit</li>
            <li>Request support in English or Spanish</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="https://chat.openai.com/gpts/empowering-patients-gpt-english" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Start in English</a>
          <a href="https://chat.openai.com/gpts/empowering-patients-gpt-spanish" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">Comenzar en Español</a>
        </div>

        <a href="/Upload_Instructions_Empowering_Patients.pdf" download className="underline text-blue-700 hover:text-blue-900 mb-10 inline-block">📥 Download Upload Instructions PDF</a>

        <div className="text-sm mt-10 text-left">
          <h2 className="font-bold mb-1">Contact</h2>
          <p>John Ramos – Medcare / Goldencare / USA</p>
          <p>📞 305-218-0000</p>
          <p>📠 888-806-7691</p>
          <p>📧 J.R@FHCSN.com</p>
        </div>

        <p className="text-xs text-gray-500 mt-6 border-t pt-4">
          This assistant is informational only and does not replace medical advice. Always consult with a physician before making care decisions. Uploads must be redacted of personal health information.
        </p>
      </div>
    </main>
  );
}
