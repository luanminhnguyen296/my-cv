import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { TFormContact } from "@/types";

export type TReturnAddContact = {
   messages: string,
   isSuccess: boolean,
   data?: any,
   error?: any
}

const contactCollection = collection(db, "contact_form")

export async function addContact(formData: TFormContact): Promise<TReturnAddContact> {
   console.log('formData', formData);

   try {
      const docRef = await addDoc(contactCollection, { ...formData, createAt: Date.now() });
      console.log("", docRef.id);
      return ({
         messages: 'Document written with ID: ',
         isSuccess: true,
         data: {
            id: docRef.id
         }
      })
   } catch (e) {
      console.error("Error adding document: ", e);
      return ({
         messages: 'Error adding document:',
         isSuccess: false,
         error: e
      })
   }
}