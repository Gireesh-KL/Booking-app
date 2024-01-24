import React from 'react';

function LoginPage() {
  return(
    <div className='mt-4'>
    <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto'>
           <input type="email"  placeholder="johndoe@gmailc.com" className='w-full border my-1 py-2 px-3 rounded-2xl'/>
            <input type="password" placeholder='password' className='w-full border my-1 py-2 px-3 rounded-2xl'/>
            <button className='bg-[#F5385D] w-full p-2 text-white rounded-2xl'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage;
