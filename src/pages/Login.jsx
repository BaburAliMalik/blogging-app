import React from 'react'
import { useForm } from "react-hook-form"

function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const loginUserFromFirebase = (data) => console.log(data)
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit(loginUserFromFirebase)}>
      <input type="email" placeholder='enter email' {...register("email", { required: true })}/><br />
       {errors.email && <span>This field is required</span>}<br />
      <input type="password" placeholder='enter password' {...register("password", { required: true })}/><br />
       {errors.password && <span>This field is required</span>}<br />
      <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login