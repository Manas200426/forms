import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateForm';

const FormOne = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [isAttendingWithGuest, setIsAttendingWithGuest] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">First Event Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name || ''}
            className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
          <label htmlFor="age" className="block text-gray-700">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={handleChange}
            value={values.age || ''}
            className={`mt-1 p-2 block w-full border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Are you attending with a guest?</label>
          <div className="mt-2 flex">
            <label className="mr-4">
              <input
                type="radio"
                name="isAttendingWithGuest"
                value="yes"
                onChange={() => setIsAttendingWithGuest(true)}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAttendingWithGuest"
                value="no"
                onChange={() => setIsAttendingWithGuest(false)}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>

        {isAttendingWithGuest && (
          <div className="mb-4">
            <label htmlFor="guestName" className="block text-gray-700">Guest Name</label>
            <input
              id="guestName"
              name="guestName"
              type="text"
              onChange={handleChange}
              value={values.guestName || ''}
              className={`mt-1 p-2 block w-full border ${errors.guestName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.guestName && <p className="text-red-500 text-sm">{errors.guestName}</p>}
          </div>
        )}

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

export default FormOne;
