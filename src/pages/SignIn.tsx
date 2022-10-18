import React,{useRef} from 'react'

const SignIn = () => {
  const username:React.MutableRefObject<any>=useRef(null)
  const password:React.MutableRefObject<any>=useRef(null)
  const login=(e:any)=>{
    e.preventDefault()
    const data={
      username:username.current.value,
      password:password.current.value
    }
    const json=JSON.stringify(data, null, 4);
    console.log(json)
  }
  return (
      <form onSubmit={login}>
        <h1>Sign In</h1>
        <label>Username/Email</label>
        <input placeholder='Type your username or email' type='text' ref={username} required />
        <label>Password</label>
        <input placeholder='Type your password' type='password' ref={password} required/>
        <button type='submit'>Login</button>
      </form>
  )
}

export default SignIn