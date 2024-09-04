import React, { useState } from 'react';
import JobStyles from './jobstatusModal.module.css'; // Import the CSS module
import LandingPage from '../LandingPage/LandingPage';
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { useForm } from 'react-hook-form';


const JobStatusComponent = () => {
  const{register, handleSubmit, watch, formState: { errors }}=useForm();
  const{data,error,sendRequest}=useNetworkRequest();
  const [selectedOption, setSelectedOption] = useState('');
  const [step, setStep] = useState(0);
  // const [expertiseLevel, setExpertiseLevel] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      setStep(1);
    }
  };

  // const handleExpertiseChange = (event) => {
  //   setExpertiseLevel(event.target.value);
  // };

  const handleSubmitForm = (data)=>{
    data.JobStatus = selectedOption;
    console.log(data);
    sendRequest("/user/jobstatus","POST",data,true);
  }

  return (
    <>
    <LandingPage />
    <div>
      {step === 0 && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Status</h2>
            <form>
              <label>
                <input
                  type="radio"
                  // {...register("JobStatus")}
                  value="Employer"
                  checked={selectedOption === 'Employer'}
                  onChange={handleRadioChange}
                />
                Employer/Employee
              </label>
              <label>
                <input
                  type="radio"
                  // {...register("JobStatus")}
                  value="Employee"
                  checked={selectedOption === 'Employee'}
                  onChange={handleRadioChange}
                />
                Job Seeker
              </label>
              <button type="button" className={JobStyles.btnNext} onClick={handleNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 1 && selectedOption === 'Employer' && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Details</h2>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <input
                type="text"
                {...register("CompanyName")}
                placeholder="Company Name"
              />
              <input
                type="text"
                {...register("Designation",{required:"Field can not be empty"})}
                placeholder="Designation"
              />
              <input
                type="text"
                {...register("Location")}
                placeholder="Location"
              />
              <button type="submit" className={JobStyles.btnNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 1 && selectedOption === 'Employee' && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Details</h2>
            <form>
              <input type="text" {...register("Title")} placeholder="Job Title" />
              <h3 className={JobStyles.expertiseHeading}>Expertise Level</h3>
              <label>
                <input
                  type="radio"
                  {...register("ExpertiseLevel")}
                  value="beginner"
                  // checked={expertiseLevel === 'beginner'}
                />
                Beginner
              </label>
              <label>
                <input
                  type="radio"
                  {...register("ExpertiseLevel")}
                  value="intermediate"
                  // checked={expertiseLevel === 'intermediate'}
                />
                Intermediate
              </label>
              <label>
                <input
                  type="radio"
                  {...register("ExpertiseLevel")}
                  value="expert"
                  // checked={expertiseLevel === 'expert'}
                />
                Expert
              </label>
              <button type="button" className={JobStyles.btnNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  </>);
};

export default JobStatusComponent;