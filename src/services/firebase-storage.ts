// import { storage } from "@/services/firebase";
import axios from "axios";
import { saveAs } from "file-saver";
import { ref, getDownloadURL, getStorage } from "firebase/storage";


async function handleDownloadDOM(url: string) {
   try {
      const pdfUrl = url;

      const response = await axios.get(pdfUrl, { responseType: "blob" });

      const blob = new Blob([response.data], { type: "application/pdf" });
      saveAs(blob, import.meta.env.VITE_URL_CV_PDF);
   } catch (error) {
      console.error("Error downloading PDF:", error);
   }
}
export async function downloadCVPDF() {
   // Create a reference to the file we want to download
   const storage = getStorage();
   const starsRef = ref(storage, import.meta.env.VITE_URL_CV_PDF);

   // Get the download URL
   return await getDownloadURL(starsRef)
      .then((url) => {
         console.log("🚀 ~ .then ~ url:", url)
         // Insert url into an <img> tag to "download"
         handleDownloadDOM(url)
         return true
      })
      .catch((error) => {
         console.log("🚀 ~ downloadCVPDF ~ error:", error)

         return false
      });
}