import { fireStoreCollection } from "@/constants/fire-store";
import { SchemaContact } from "@/types/schema";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { IProject } from "@/types";
import { IFetchReturn } from '../types/index';

export type TReturnAddContact = {
   msg: string,
   isSuccess: boolean,
   data?: any,
   error?: any
}


function getFetchReturn(msg: string, cb: (reason: any) => void, status = true, data?: any) {
   return cb({
      msg,
      isSuccess: status,
      data
   })
}

export async function addContactFireStore(formData: SchemaContact): Promise<IFetchReturn<null>> {
   return new Promise((resolve, reject) => {
      const contactCollection = doc(db, fireStoreCollection.contact, formData.email)
      try {
         setDoc(contactCollection, formData, { merge: true })
            .then(() => {
               getFetchReturn('Document written with ID! ', resolve)
            })
            .catch((e) => {
               console.log("🚀 ~ e:", e)
               getFetchReturn('Error adding document! ', reject, false)
            })
      } catch (e) {
         getFetchReturn('Error adding document! ', reject, false)
      }
   })
}

export async function getPortfolioFireStore(): Promise<IFetchReturn<IProject[]> | IFetchReturn<null>> {

   return new Promise((resolve, reject) => {

      try {
         const docRef = collection(db, fireStoreCollection.portfolio)
         getDocs(docRef)
            .then((docsSnap: any) => {
               const data: IProject[] = []
               docsSnap.forEach((doc: any) => {
                  data.push(doc.data())
               })
               if (data.length > 0) {
                  getFetchReturn('Get portfolio success!', resolve, true, data)
               } else {
                  getFetchReturn('No such document!! ', reject, false)
               }
            })
            .catch(() => getFetchReturn('No such document!! ', reject, false))
      } catch (e) {
         console.log("🚀 ~ returnnewPromise ~ e:", e)
         getFetchReturn('No such document!! ', reject, false)
      }
   })
}

