import React from 'react'
const RegisterPage = () => {
  return (
    <div className='register'>
        <div className='register_content'>
            <form>
                <input placeholder='First Name'  name='firstname' required />
                <input placeholder='Last Name'  name='lastname' required />
                <input placeholder='Email' type='email' name='email' required />
                <input placeholder='Password' type='password' name='password' required />
                <input placeholder='Confirm Password' type='password' name='confirmpassword' required />
                <input id="image" type='file' name='profileImage' accept='image/*' style={{display:'none'}} required/>
                <label htmlFor='image'>
                    <img src="/assets/addImage.png" alt="Upload profile" />
                    <p>Upload Your Photo</p>
                </label>
                <button type="submit">REGISTER</button>
            </form>
            <a href='/login'>Already have an account? Log In Here</a>
        </div>
    </div>
  )
}

export default RegisterPage