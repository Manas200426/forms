import React from 'react';
import FormOne from './FormOne';
import JobForm from './JobForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10">
      <FormOne />
      <JobForm />
    </div>
  );
}

export default App;
