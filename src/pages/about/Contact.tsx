import InputField from "@/components/Forms/InputField";
import CVButton from "@/components/UI/Button";
import Heading from '@/components/UI/Dropdown/Heading';
import ToastCV from "@/components/UI/ToastCV";
import idSections from "@/constants/id-section-page";
import { validationSchemaContact } from "@/helpers/validation/form";
import { TReturnAddContact, addContact } from "@/services/contact-form";
import { TDataToastMessages, TFormContact } from "@/types";
import { FastField, Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { Github, Mailbox, Phone, PinMap } from "react-bootstrap-icons";


type TContact = { icon: FC, title: string }

const contacts: TContact[] = [
   {
      icon: Phone,
      title: '+84 902 555 919'
   },
   {
      icon: Mailbox,
      title: 'luanminhnguyen296@gmail.com'
   },
   {
      icon: PinMap,
      title: 'Le Quang Dinh street, Binh Thanh District, HCM City'
   },
   {
      icon: Github,
      title: 'github.com/luanminhnguyen296'
   }
]

export default function Contact() {
   const [toast, setToast] = useState<TDataToastMessages | null>(null);
   const [messageStore, setMessageStore] = useState<TFormContact | null>(null);
   const [formContact, setFormContact] = useState<TFormContact>({
      email: '',
      phone: '',
      name: '',
      message: ''
   });

   async function handleSubmit(values: TFormContact, actions: any) {
      localStorage.setItem('message', JSON.stringify(values))
      setMessageStore(values)

      const result: TReturnAddContact = await addContact(values)
      if (result.isSuccess) {
         setToast({
            status: 'success',
            msg: 'Thank you for sending the message. I will get back to you as soon as I receive your information.'
         })
         actions.resetForm();
      } else {
         setToast({
            status: 'error',
            msg: 'Message delivery failed due to an unknown error. Please try again later!'
         })
      }

      console.log("🚀 ~ handleSubmit ~ TFormContact:", values)
   }

   function getMessageStore() {
      const res = localStorage.getItem('message');
      if (res !== 'null' && res) {
         setMessageStore(JSON.parse(res))
      }
   }

   useEffect(() => {
      console.log('formContact', formContact);

   }, [formContact])

   function handleWatchMessageSent() {
      console.log('update', messageStore);

      if (messageStore?.email)
         setFormContact({ ...messageStore })
   }

   useEffect(getMessageStore, [])

   return (
      <div id={idSections.contact} className='flex w-full flex-col lg:flex-row gap-8 mb-10'>

         {
            toast && <ToastCV data={toast} onCloseToast={setToast} />
         }

         <div className="flex flex-col basis-1/3">
            <Heading title="My contact" className="mb-11" />
            <div className="flex flex-col gap-3 md:gap-8">
               {
                  contacts.map((i: TContact, id: number) => (
                     <div className="flex items-center" key={id}>
                        <span className="text-xl dark:text-gray-400 text-gray-600 pr-5 ">
                           <i.icon />
                        </span>
                        <span className="font-semibold dark:text-gray-400 text-sm text-gray-600">
                           {i.title}
                        </span>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="flex flex-col flex-1">
            <Heading title="Send messages for me" className="mb-8" />
            <Formik enableReinitialize={true} initialValues={formContact} validationSchema={validationSchemaContact} validateOnBlur={true} onSubmit={handleSubmit}>
               {
                  ({ resetForm, isSubmitting }) => (
                     <Form className='flex w-full'>
                        <div className="flex gap-5 flex-1 flex-col lg:flex-row ">
                           <div className="flex basis-2/5 flex-col gap-y-2">
                              <FastField className='mb-0' height={40} name="name" label="Name" placeholder="Your name..." component={InputField} />
                              <FastField className='mb-0' height={40} name="email" label="Email" placeholder="Your email..." component={InputField} />
                              <FastField className='mb-0' height={40} name="phone" label="Phone" placeholder="Your phone..." component={InputField} />
                           </div>
                           <div className="flex flex-col grow justify-between">
                              <FastField className='w-full h-full self-stretch ' type='textarea' name="message" label="Messages" placeholder="Messages..." component={InputField} />
                              <div className="w-full flex mt-4">
                                 <CVButton type='submit' cvType='bg-cv' disabled={isSubmitting}>Send message</CVButton>
                                 {
                                    messageStore?.email &&
                                    <CVButton cvType='bg-default' className="ml-3" onClick={handleWatchMessageSent}>Watch message sent</CVButton>
                                 }
                                 <CVButton cvType='bg-default' className="ml-3" type='reset' onClick={() => resetForm()}>Reset</CVButton>
                              </div>
                           </div>
                        </div>

                     </Form>
                  )
               }
            </Formik>
         </div>
      </div>
   )
}
