import React from 'react'
import TextInput from '../wrappers/textInput';


const Contact = () => {
  const inputLabels = ['First Name', 'Last Name', 'Phone Number', 'Email'];

  return (
    <div className='contact items-center justify-center flex'>

    <div className='bg-primary-content'>
    Hola
    </div>
    <div>
      <h2>Drop you Message</h2>
        {inputLabels.map((label) => (
            <TextInput>{label}</TextInput>
          ))}
          <label className="form-control">
  <div className="label">
    <span className="label-text">Message</span>
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
</label>
    </div>
      
    </div>
  );
};

export default Contact;