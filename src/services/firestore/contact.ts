import { fireStoreCollection } from "@/constants/fire-store"
import { IFetchReturn, ISchemaContact } from "@/types"
import { getFetchReturn } from "@/utils/helper"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

async function addContactFireStore(formData: ISchemaContact): Promise<IFetchReturn<null>> {
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


export default addContactFireStore