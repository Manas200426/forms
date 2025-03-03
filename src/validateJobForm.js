export default function validateJobForm(values) {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    if (['Developer', 'Designer'].includes(values.position) && (!values.relevantExperience || values.relevantExperience <= 0)) {
      errors.relevantExperience = 'Relevant Experience is required and must be greater than 0';
    }
  
    if (values.position === 'Designer' && (!values.portfolioURL || !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL))) {
      errors.portfolioURL = 'Portfolio URL is required and must be a valid URL';
    }
  
    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (!values.skills || Object.values(values.skills).every(skill => !skill)) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  }
  