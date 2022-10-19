import React,{useRef} from 'react'

const RegisterForm = () => {
  const firstName:React.MutableRefObject<any>=useRef(null)
  const lastName:React.MutableRefObject<any>=useRef(null)
  const email:React.MutableRefObject<any>=useRef(null)
  const password:React.MutableRefObject<any>=useRef(null)
  const confirmPassword:React.MutableRefObject<any>=useRef(null)

  const register=(e:any)=>{
    e.preventDefault()
    const data={
      firstName:firstName.current.value,
      lastName:lastName.current.value,
      email:email.current.value,
      password:password.current.value,
      confirmPassword:confirmPassword.current.value,
    }
    const json=JSON.stringify(data, null, 4);
    console.log(json)
  
  }
  return (
    <form onSubmit={register}>
      <h1>Register Form</h1>
      <label>First Name</label>
      <input placeholder='Your First Name...' type='text' ref={firstName} required />
      <label>Last Name</label>
      <input placeholder='Your Last Name...' type='text' ref={lastName} required />
      <label>Email</label>
      <input placeholder='Your Email' type='text' ref={email} required />
      <label>Password</label>
      <input placeholder='Password' type='password' ref={password} required/>
      <label>Confirm Password</label>
      <input placeholder='Confirm password' type='password' ref={confirmPassword} required/>
      <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterForm