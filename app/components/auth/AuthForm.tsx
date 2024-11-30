'use client'

import { useAuth } from '@/app/hooks/useAuth'
import { useForm } from '@/app/hooks/useForm'
import { signInSchema, signUpSchema } from '@/app/lib/validation/authSchema'
import FormInput from './FormInput'
import AuthSocial from './AuthSocial'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect,useRef } from 'react'
import { useAuthMutation } from '@/app/hooks/useAuthMutation'
import Spinner from '../ui/Spinner'
import {useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function AuthForm({ providers }: { providers: any }) {
  console.log('renderd authform');
 
  const SearchParams = useSearchParams();
  const existingEmail= SearchParams.get('email');
  const { isSignUp, toggleMode } = useAuth()
  const { values, errors, handleChange, validate,resetForm,setExistingEmail } = useForm(
    isSignUp ? signUpSchema : signInSchema
  )
  const { registerMutation, loginMutation } = useAuthMutation();

  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log("effect triggerd");
    resetForm();
    const timeoutId = setTimeout(() => {
      if (existingEmail) {
        console.log(existingEmail);
        setExistingEmail(existingEmail);
      } else {
        firstInputRef.current?.focus();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSignUp, resetForm, existingEmail, setExistingEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('inside handle submit');
    if (validate()) {
         if (isSignUp) {
           registerMutation.mutate(values)
         } else {
           loginMutation.mutate(values)
         }
    }
  }

  const isLoading = registerMutation.isPending || loginMutation.isPending
  const error = registerMutation.error || loginMutation.error

  return (
    <div className={`flex flex-col items-center justify-center min-h-[calc(100vh-160px)] 
      bg-white py-12 ${isLoading ? 'pointer-events-none' : ''}`}>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-sm w-[70%] flex overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Left Section */}
        <motion.div
          className="w-[40%] relative bg-blue-500 p-12"
          animate={{
            backgroundColor: isSignUp ? '#2874f0' : '#2874f0',
          }}
        >
          <div className="text-white space-y-6 mt-12">
            {' '}
            {/* Increased spacing */}
            <motion.h2
              key={isSignUp ? 'signup' : 'login'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl font-medium"
            >
              {isSignUp ? 'Looks like youre new here!' : 'Welcome Back'}
            </motion.h2>
            <motion.p
              key={isSignUp ? 'signup-text' : 'login-text'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl text-gray-100"
            >
              {isSignUp
                ? 'Sign up with your email to get started'
                : 'Get access to your Orders, Wishlist and Recommendations'}
            </motion.p>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-[250px] bg-contain bg-bottom bg-no-repeat" // Increased image height
            style={{
              backgroundImage: "url('./images/login_img.png')",
            }}
          />
        </motion.div>

        {/* Right Section */}
        <div className="w-[60%] p-12 flex flex-col justify-between">
          {' '}
          {/* Increased padding */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignUp ? 'signup-form' : 'login-form'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8" // Increased spacing
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="text-red-500">{error.message}</div>}

                {/* Sign Up Fields */}
                {isSignUp && (
                  <>
                    <FormInput
                      ref={firstInputRef}
                      label="Full Name"
                      type="text"
                      name="fullName"
                      value={values.fullName || ''}
                      onChange={handleChange}
                      error={errors.fullName}
                    />
                    <FormInput
                      label="Email Address"
                      type="email"
                      name="email"
                      value={values.email || ''}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      name="password"
                      value={values.password || ''}
                      onChange={handleChange}
                      error={errors.password}
                    />
                    <FormInput
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword || ''}
                      onChange={handleChange}
                      error={errors.confirmPassword}
                    />
                  </>
                )}

                {/* Sign In Fields */}
                {!isSignUp && (
                  <>
                    <FormInput
                      ref={firstInputRef}
                      label="Email Address"
                      type="email"
                      name="email"
                      value={values.email || ''}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      name="password"
                      value={values.password || ''}
                      onChange={handleChange}
                      error={errors.password}
                    />
                    <div className="flex justify-end">
                      <Link
                        href="/forgot-password"
                        className="text-md text-blue-500 hover:text-blue-600 hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    w-full bg-orange-500 text-white py-4 font-medium rounded-sm 
                    hover:bg-orange-600 transition-all duration-200 text-lg
                    flex items-center justify-center
                    ${isLoading ? 'opacity-80 cursor-wait' : ''}
                  `}
                >
                  {isLoading ? (
                    <>
                      <Spinner className="h-5 w-5 text-white/90 mr-2" />
                      <span className="text-white/90">Processing...</span>
                    </>
                  ) : (
                    isSignUp ? 'Sign Up' : 'Sign In'
                  )}
                </button>

                {/* Make other buttons appear disabled during loading */}
                <div className={`${isLoading ? 'opacity-50' : ''}`}>
                  {/* Divider */}

                  {/* OAuth Buttons */}
                  {isSignUp ? (
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="w-full bg-white text-blue-500 py-4 font-medium rounded-sm 
                     shadow-md hover:shadow-lg hover:bg-white transition-all text-lg
                     border border-blue-500 hover:text-blue-600"
                    >
                      Existing User? Log in
                    </button>
                  ) : (
                    <>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-lg">
                          <span className="px-2 bg-white text-gray-500">Or</span>
                        </div>
                      </div>
                      <AuthSocial providers={providers} />
                    </>
                  )}
                </div>
              </form>

              {/* Toggle Button */}
              <motion.button
                onClick={toggleMode}
                className="text-blue-500 font-medium text-lg text-center mt-8 hover:underline"
              >
                {!isSignUp && 'New to Shoppay? Create an account'}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}