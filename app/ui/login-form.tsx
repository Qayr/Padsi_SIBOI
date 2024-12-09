'use client';
import {
  EnvelopeIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import Link from 'next/link';
// import { authenticate } from '@/app/lib/actions';
import { Button } from './button';

export default function LoginForm() {

  return (
    
          <form action={LoginForm}>
      {/* <div className="mb-40 mt-40 flex w-full flex-col rounded-2xl bg-white shadow-2xl md:flex-row"> */}
      
      <div className="mb-40 mt-40 w-full rounded-2xl bg-yellow-400 p-5">
        <div className="text-left font-bold">
          
             <span className="text-white">Bowl INC</span>
          
        </div>
        <div className="py-10">
          <h2 className="text-3xl font-bold text-white">Sign in to Account</h2>
          <div className="mb-2 inline-block w-10 border-2 border-white"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-full bg-yellow-400 p-2">
              {/* USERNAME */}
              <div className="relative mb-6">
              <label className='text-lg text-white font-medium'>Email</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  required
                />
                
              </div>
              {/* PASSWORD */}
              <div className="relative mb-6">
              <label className='text-lg text-white font-medium'>Password</label>
                <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white'
                    id='password'
                    type="password"
                    name="password"
                    placeholder='Enter your Password'
                    
                    required
                  minLength={6}
                />
      
                
              </div>
              <LoginButton />
              <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input
                        type='checkbox'
                        id='remember'
                    />
                    <label className='ml-2 font-medium text-base' htmlFor="remember">Remember me</label>
                </div>
                <button className='font-medium text-base text-blue-400'>Forgot Password</button>
            </div>
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* </div> */}
    </form>
    
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-center">
    <Link href="/dashboard" passHref>
      <Button
        className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-black"
        aria-disabled={pending}
      >
        Login
      </Button>
    </Link>
  </div>
  );
}
