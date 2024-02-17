import { storage } from "@/services/firebase";
import axios from "axios";
import { saveAs } from "file-saver";
import { ref, getDownloadURL } from "firebase/storage";


export async function downloadCVPDF() {

   const starsRef = ref(storage, import.meta.env.VITE_URL_CV_PDF);

   return await getDownloadURL(starsRef)
      .then(async (url) => {
         try {
            const pdfUrl = url;
            const response = await axios.get(pdfUrl, { responseType: "blob" });
            const blob = new Blob([response.data], { type: "application/pdf" });
            saveAs(blob, import.meta.env.VITE_URL_CV_PDF);
         } catch (error) {
            console.error("Error downloading PDF:", error);
         }
         return true
      })
      .catch((error) => {
         console.log('error:', error);
         return false
      });
}