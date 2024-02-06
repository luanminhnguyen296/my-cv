import { fireStoreCollection } from "@/constants/fire-store";
import { IDetailsExperience, IExperience, IIpInfo, IIpInfoSaveStorage, IProject, ISkill } from "@/types";
import { IFetchReturn } from '@/types/index';
import { SchemaContact } from "@/types/schema";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getStorageInfo, checkFullTime } from "@/utils/function-helper";
import localStorageConst from '@/constants/localStorage'


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

   return new Promise((resolve) => {

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
                  getFetchReturn('No such document!! ', resolve, false)
               }
            })
            .catch(() => getFetchReturn('No such document!! ', resolve, false))
      } catch (e) {
         console.log("🚀 ~ returnnewPromise ~ e:", e)
         getFetchReturn('No such document!! ', resolve, false)
      }
   })
}

export async function getExperienceFireStore(): Promise<IFetchReturn<IExperience[]> | IFetchReturn<null>> {

   return new Promise((resolve) => {

      try {
         const docRefExperience = collection(db, fireStoreCollection.experience)
         const docRefDetails = collection(db, fireStoreCollection.detailsExperience)
         Promise.all([getDocs(docRefExperience), getDocs(docRefDetails)])
            .then((docsSnap: any[]) => {
               const data: IExperience[] = []
               docsSnap[0].forEach((doc: any) => {

                  const details: IDetailsExperience[] = []
                  docsSnap[1].forEach((i: any) => {

                     if (doc.data().content.includes(i.id)) {
                        details.push(i.data())
                     }
                  })
                  const experience: IExperience = doc.data()
                  experience.content = details
                  data.push(experience)
               })
               if (data.length > 0) {
                  getFetchReturn('Get experience success!', resolve, true, data)
               } else {
                  getFetchReturn('No such document!! ', resolve, false)
               }
            })
            .catch(() => getFetchReturn('No such document!! ', resolve, false))
         getDocs(docRefExperience)

      } catch (e) {
         console.log("🚀 ~ returnnewPromise ~ e:", e)
         getFetchReturn('No such document!! ', resolve, false)
      }
   })
}


export async function getSkillFireStore(): Promise<IFetchReturn<ISkill[]> | IFetchReturn<null>> {

   return new Promise((resolve) => {

      try {
         const docRef = collection(db, fireStoreCollection.skill)
         getDocs(docRef)
            .then((docsSnap: any) => {
               const data: ISkill[] = []

               docsSnap.forEach((doc: any) => {
                  data.push({
                     id: doc.id,
                     ...doc.data()
                  })
               })
               if (data.length > 0) {
                  getFetchReturn('Get skill success!', resolve, true, data)
               } else {
                  getFetchReturn('No such document!! ', resolve, false)
               }
            })
            .catch((e) => {
               console.error("🚀 ~ returnnewPromise ~ e:", e)
               getFetchReturn('No such document!', resolve, false)
            })

      } catch (e) {
         console.log("🚀 ~ returnnewPromise ~ e:", e)
         getFetchReturn('No such document! ', resolve, false)
      }
   })
}


async function getIpInfoClient(ip: string): Promise<IIpInfo | null> {
   return new Promise((resolve) => {
      const docDef = doc(db, fireStoreCollection.visitSite, ip)
      getDoc(docDef)
         .then((res: any) => resolve(res.data()))
         .catch(() => resolve(null))
   })
}

export async function sendIpInfoClient(data: IIpInfo): Promise<IFetchReturn<null>> {

   const ipInfoGet: IIpInfo | null = await getIpInfoClient(data.ip)

   return new Promise((rs) => {

      let isFullTime = false

      if (ipInfoGet) isFullTime = checkFullTime(ipInfoGet?.currentTime)

      if (!isFullTime)
         return rs({
            isSuccess: true,
            msg: 'Send info after sometime!'
         })

      if (!ipInfoGet) data.visitCount = 1
      else data.visitCount = ipInfoGet?.visitCount ? ipInfoGet?.visitCount + 1 : 1


      const docDef = doc(db, fireStoreCollection.visitSite, data.ip)

      try {
         setDoc(docDef, data, { merge: true })
            .then(() => {
               rs({
                  isSuccess: true,
                  msg: 'Send info success!'
               })
            })
      } catch {
         rs({
            isSuccess: false,
            msg: 'Send info fail!'
         })
      }
   })
}