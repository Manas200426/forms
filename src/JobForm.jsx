import React, { useState } from 'react';
import useJobForm from './useJobForm';
import validate from './validateJobForm';

const JobForm = () => {
  const { values, errors, handleChange, handleSubmit } = useJobForm(validate);
  const [position, setPosition] = useState('');

  const handlePositionChange = (e) => {
    const newPosition = e.target.value;
    setPosition(newPosition);
    handleChange({
      target: {
        name: 'position',
        value: newPosition,
      },
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleChange({
      target: {
        name: 'skills',
        value: {
          ...values.skills,
          [name]: checked,
        },
      },
    });
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={handleChange}
            value={values.fullName || ''}
            className={`mt-1 p-2 block w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email || ''}
            className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={handleChange}
            value={values.phoneNumber || ''}
            className={`mt-1 p-2 block w-full border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-700">Applying for Position</label>
          <select
            id="position"
            name="position"
            onChange={handlePositionChange}
            value={values.position || ''}
            className={`mt-1 p-2 block w-full border ${errors.position ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          >
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>

        {(position === 'Developer' || position === 'Designer') && (
          <div className="mb-4">
            <label htmlFor="relevantExperience" className="block text-gray-700">Relevant Experience (years)</label>
            <input
              id="relevantExperience"
              name="relevantExperience"
              type="number"
              onChange={handleChange}
              value={values.relevantExperience || ''}
              className={`mt-1 p-2 block w-full border ${errors.relevantExperience ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.relevantExperience && <p className="text-red-500 text-sm">{errors.relevantExperience}</p>}
          </div>
        )}

        {position === 'Designer' && (
          <div className="mb-4">
            <label htmlFor="portfolioURL" className="block text-gray-700">Portfolio URL</label>
            <input
              id="portfolioURL"
              name="portfolioURL"
              type="text"
              onChange={handleChange}
              value={values.portfolioURL || ''}
              className={`mt-1 p-2 block w-full border ${errors.portfolioURL ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.portfolioURL && <p className="text-red-500 text-sm">{errors.portfolioURL}</p>}
          </div>
        )}

        {position === 'Manager' && (
          <div className="mb-4">
            <label htmlFor="managementExperience" className="block text-gray-700">Management Experience</label>
            <input
              id="managementExperience"
              name="managementExperience"
              type="text"
              onChange={handleChange}
              value={values.managementExperience || ''}
              className={`mt-1 p-2 block w-full border ${errors.managementExperience ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.managementExperience && <p className="text-red-500 text-sm">{errors.managementExperience}</p>}
          </div>
        )}

<div className="mb-4">
          <label className="block text-gray-700">Additional Skills</label>
          <div className="mt-2">
            {['JavaScript', 'CSS', 'Python', 'React'].map(skill => (
              <label key={skill} className="mr-4">
                <input
                  type="checkbox"
                  name={skill}
                  onChange={handleCheckboxChange}
                  checked={values.skills?.[skill] || false}
                  className="mr-1"
                />
                {skill}
              </label>
            ))}
          </div>
          {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="interviewTime" className="block text-gray-700">Preferred Interview Time</label>
          <input
            id="interviewTime"
            name="interviewTime"
            type="datetime-local"
            onChange={handleChange}
            value={values.interviewTime || ''}
            className={`mt-1 p-2 block w-full border ${errors.interviewTime ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.interviewTime && <p className="text-red-500 text-sm">{errors.interviewTime}</p>}
        </div>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
