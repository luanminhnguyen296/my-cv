import ResetPassword from '@/components/Authentication/ResetPassword'
import InputField from '@/components/Forms/InputField'
import CVButton from '@/components/UI/Button/index'
import { auth } from '@/services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Card, Toast } from 'flowbite-react'
import { FastField, Form, Formik } from 'formik'
import { useState } from 'react'
import { X } from 'react-bootstrap-icons'
import { Helmet } from 'react-helmet-async'


const toastStyle = {
   success: {
      icon: 'bg-green-700 text-white text-green-500 dark:bg-green-800 dark:text-green-200',
      container: 'bg-green-50 text-green-900'
   },
   error: {
      icon: 'bg-red-700 text-white dark:bg-red-800 dark:text-red-200',
      container: 'bg-red-50 text-red-900'
   }
}

export default function Login() {

   const [showToast, setShowToast] = useState(false);
   const [resetPassword, setResetPassword] = useState(false);
   const [toast, setToast] = useState({
      status: 'success',
      msg: ''
   });

   const initialValues = {
      email: '',
      password: ''
   }

   const handleSubmit = (values: any) => {
      console.log("🚀 ~ handleSubmit ~ values:", values)
      const { email, password } = values

      signInWithEmailAndPassword(auth, email, password)
         .then((userCredentials) => {
            console.log("🚀 ~ .then ~ userCredentials:", userCredentials)
         })
         .catch((error) => {
            console.log("🚀 ~ handleSubmit ~ error:", error)

         })
   }

   const handleCloseTost = () => {
      setShowToast(false);
      setToast({
         status: 'success',
         msg: ''
      })
   }

   const handleForgotPassword = () => {
      setResetPassword(true)
      console.log("🚀 ~ handleForgotPassword ~ 'Forgot Password':", 'Forgot Password')
   }

   return (
      <>
         <Helmet>
            <title>Login</title>
         </Helmet>

         {
            showToast &&
            <Toast className={`fixed right-5 top-5 transition duration-150 ${toastStyle.success.container}`}>
               <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <X className="h-5 w-5" />
               </div>
               <div className={`ml-3 text-sm font-normal ${toastStyle.success.container}`}>{toast.msg}</div>
               <Toast.Toggle onDismiss={handleCloseTost} />
            </Toast>
         }

         <Card className='max-w-md m-auto'>
            <h3 className='leading-[3rem] border-l-4 font-bold border-cv-600 pl-3 mb-4 text-xl bg-gray-50'>{resetPassword ? 'Reset Password' : 'Login'}</h3>

            {
               !resetPassword ? <Formik initialValues={initialValues} validateOnBlur={true} validateOnChange={true} onSubmit={handleSubmit} >
                  {
                     () => (
                        <Form>
                           <FastField name='email' label="Email" component={InputField} />
                           <FastField name='password' label="Password" component={InputField} />
                           <div className='flex mt-5 gap-2'>
                              <CVButton type='submit' cvType='bg-color'>Sign In</CVButton>
                              <CVButton cvType='bg-default' onClick={handleForgotPassword}>Forgot Password</CVButton>
                           </div>
                        </Form>
                     )
                  }
               </Formik>
                  : <ResetPassword handleGoBack={setResetPassword} handleAlert={setToast} onShowToast={setShowToast} />
            }
         </Card>
      </>
   )
}
