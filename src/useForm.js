import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // Do something with the form values
      alert(JSON.stringify(values, null, 2));
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
