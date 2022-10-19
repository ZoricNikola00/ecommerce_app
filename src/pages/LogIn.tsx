import React,{useRef} from 'react'

const Login = () => {
  const email:React.MutableRefObject<any>=useRef(null)
  const password:React.MutableRefObject<any>=useRef(null)
  const login=(e:any)=>{
    e.preventDefault()
    const data={
      email:email.current.value,
      password:password.current.value
    }
    const json=JSON.stringify(data, null, 4);
    console.log(json)
  }
  return (
      <form onSubmit={login}>
        <h1>Sign In</h1>
        <label>Email</label>
        <input placeholder='Type your email' type='text' ref={email} required />
        <label>Password</label>
        <input placeholder='Type your password' type='password' ref={password} required/>
        <button type='submit'>Login</button>
      </form>
  )
}

export default Login