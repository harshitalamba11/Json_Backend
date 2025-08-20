import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };

    console.log(formData);

    axios.post('https://json-backend-2-5btq.onrender.com', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }

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
              onChange={e=>setName(e.target.value)}
              placeholder="Your Name" 
              className="mt-1 p-2 border rounded-md w-full " 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold m-5">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="Your Email" 
              className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold p-3">Message:</label>
            <textarea 
              name="message" 
              value={message}
              placeholder="Your Message" 
              rows="4" 
              onChange={e=>setMessage(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" 
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
