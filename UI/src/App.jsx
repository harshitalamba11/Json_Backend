import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Build form data using state (not event.target)
    const formData = { name, email, message };

    try {
      const response = await axios.post(
        'https://json-backend-011.onrender.com/contacts', // Must match top-level db.json key
        formData,
        { headers: { 'Content-Type': 'application/json' } } // Ensure JSON
      );
      console.log('Form submitted successfully:', response.data);

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Show a more descriptive error
      console.error(
        'Error submitting form:',
        error.response?.status,
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold">Fill the details</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold p-3">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name" 
              className="mt-1 p-2 border rounded-md w-full" 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold m-5">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your Email" 
              className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold p-3">Message:</label>
            <textarea 
              name="message" 
              value={message}
              placeholder="Your Message" 
              rows="4" 
              onChange={e => setMessage(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
