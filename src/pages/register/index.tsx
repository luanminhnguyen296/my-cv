import InputField from '@/components/UI/Forms/InputField';
import { validationSchemaRegister } from '@/helpers/validation/form';
import { auth } from '@/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'flowbite-react';
import { FastField, Form, Formik } from 'formik';
import { Helmet } from 'react-helmet-async';


const initFormik = {
   name: '',
   address: '',
   email: '',
   password: '',
   confirmPassword: '',
}

export default function Register() {

   function onSubmitForm(values: any) {
      const { email, password } = values;
      console.log('submit form', values);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            console.log("🚀 ~ .then ~ userCredential:", userCredential)
         })
         .catch((error) => {
            console.log("🚀 ~ onSubmitForm ~ error:", error)

         })
   }

   return (
      <>
         <Helmet>
            <title>Sign Up</title>
         </Helmet>
         <div className='max-w-md m-auto'>
            <h3>Register New Account</h3>

            <Formik
               initialValues={initFormik}
               validationSchema={validationSchemaRegister}
               onSubmit={onSubmitForm}
            >
               {() => {
                  return (
                     <Form>
                        <FastField name="name"
                           label='Name'
                           placeholder='Your name...' component={InputField} />
                        <FastField name="email"
                           label='Email'
                           placeholder='Example@domain.com' component={InputField} />
                        <FastField name="address"
                           label='Address'
                           placeholder='Your address...' component={InputField} />
                        <FastField name="password"
                           label='Password'
                           type='password' component={InputField} />
                        <FastField name="confirmPassword"
                           label='Confirm password'
                           type='password' component={InputField} />
                        <Button type='submit' className=''>Sign Up</Button>
                     </Form>
                  );
               }}
            </Formik>

         </div>
      </>
   )
}
