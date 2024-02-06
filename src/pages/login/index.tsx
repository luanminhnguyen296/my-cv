import ResetPassword from '@/components/Authentication/ResetPassword'
import InputField from '@/components/Forms/InputField'
import CVButton from '@/components/UI/Button/index'
import ToastCV from '@/components/UI/ToastCV'
import { setToken } from '@/features/authentication/authenSlice'
import { validationSchemaSignIn } from '@/helpers/validation/form'
import { auth } from '@/services/firebase'
import { TDataToastMessages, TLogin } from '@/types'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Card } from 'flowbite-react'
import { FastField, Form, FormikHelpers as FormicHelpers, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { PersonBoundingBox, ShieldLockFill } from 'react-bootstrap-icons'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const BgBlur = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(12px);
      left: 0;
      border-radius: 7px;
      overflow: hidden;
   `


export default function Login() {

   const navigate = useNavigate()
   const reduxDispatch = useDispatch()
   const [resetPassword, setResetPassword] = useState(false);
   const [alert, setAlert] = useState<TDataToastMessages | null>(null)
   const initialValues = {
      email: '',
      password: ''
   }

   const handleSubmit = (values: any, { setErrors }: FormicHelpers<TLogin>) => {

      const { email, password } = values

      signInWithEmailAndPassword(auth, email, password)
         .then((userCredentials) => {
            setAlert({
               status: 'success',
               msg: 'Login success!'
            })
            console.log("🚀 ~ .then ~ userCredentials:", userCredentials)
         })
         .catch(() => {
            setErrors({ 'email': 'Email may be incorrect!', 'password': 'Password may be incorrect' });
            setAlert({
               status: 'error',
               msg: 'An error occurred with log in.'
            })
         })
   }

   const checkLogged = () => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            navigate('/admin', { replace: true })
            reduxDispatch(setToken(user.refreshToken))
         }
      })
   }

   useEffect(() => checkLogged, [])

   return (
      <>
         <Helmet>
            <title>Login</title>
         </Helmet>

         <ToastCV data={alert} />
         <Card className='max-w-[600px] m-auto md:w-[600px]
            relative
            z-999
            p-8
            dark:bg-transparent'>
            <BgBlur />
            <div className='relative z-10'>
               <div>
                  <h3 className='leading-[3rem] mb-8 text-5xl'>
                     {resetPassword ? 'Reset Password' : 'Login'}
                     <span className='font-bold font-6xl text-cv-700'>.</span>
                  </h3>
                  <div className='text-md font-light mb-8'>
                     This feature is only for admin users
                     <Link to='/' className='text-cv-600 font-semibold'> Back home</Link>
                  </div>
               </div>
               {
                  !resetPassword
                     ? <Formik initialValues={initialValues} validateOnBlur={true} validationSchema={validationSchemaSignIn} validateOnChange={true} onSubmit={handleSubmit} >
                        {
                           () => {
                              return (
                                 <Form>
                                    <FastField name='email' label="Email" icon={PersonBoundingBox} component={InputField} />
                                    <FastField name='password' label="Password" type="password" className='mt-5' icon={ShieldLockFill} component={InputField} />
                                    <div className='flex mt-10 gap-2'>
                                       <CVButton type='submit' cvType='bg-cv' >Sign In</CVButton>
                                       <CVButton cvType='bg-default' onClick={() => setResetPassword(true)}>Forgot Password</CVButton>
                                    </div>
                                 </Form>
                              )
                           }
                        }
                     </Formik>
                     : <ResetPassword handleGoBack={setResetPassword} />
               }
            </div>
         </Card>
      </>
   )
}
