import React from 'react'
import TextInput from './textInput';


const Contact = () => {
  return (
    <div className='contact'>
       <TextInput>First Name </TextInput>
       <TextInput>Last Name </TextInput>
       <TextInput >Phone Number </TextInput>
       <TextInput>Email </TextInput>

      </div>
  )
}

export default Contact;