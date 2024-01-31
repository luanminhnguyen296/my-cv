import { fireStoreCollection } from "@/constants/fire-store";
import { SchemaContact } from "@/types/schema";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export type TReturnAddContact = {
   messages: string,
   isSuccess: boolean,
   data?: any,
   error?: any
}



export async function addContact(formData: SchemaContact): Promise<TReturnAddContact> {
   return new Promise((resolve, reject) => {
      const contactCollection = doc(db, fireStoreCollection.formContact, formData.email)
      try {
         setDoc(contactCollection, formData, { merge: true })
            .then(() => {
               resolve({
                  messages: 'Document written with ID: ',
                  isSuccess: true,
                  data: {
                     id: '923'
                  }
               })
            })
            .catch((e) => {
               reject({
                  messages: 'Error adding document:',
                  isSuccess: false,
                  error: e
               })
            })
      } catch (e) {
         reject({
            messages: 'Error adding document:',
            isSuccess: false,
            error: e
         })
      }
   })
}

// const contactCollection = collection(db, fireStoreCollection.formContact)
// export async function addContact(formData: SchemaContact): Promise<TReturnAddContact> {
//    console.log('formData', formData);

//    try {
//       const docRef = await addDoc(contactCollection, { ...formData, createAt: Date.now() });
//       console.log("", docRef.id);
//       return ({
//          messages: 'Document written with ID: ',
//          isSuccess: true,
//          data: {
//             id: docRef.id
//          }
//       })
//    } catch (e) {
//       console.error("Error adding document: ", e);
//       return ({
//          messages: 'Error adding document:',
//          isSuccess: false,
//          error: e
//       })
//    }
// }