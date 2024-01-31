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
         console.log('error:', error);

         // A full list of error codes is available at
         // https://firebase.google.com/docs/storage/web/handle-errors
         switch (error.code) {
            case 'storage/object-not-found':
               // File doesn't exist
               break;
            case 'storage/unauthorized':
               // User doesn't have permission to access the object
               break;
            case 'storage/canceled':
               // User canceled the upload
               break;

            // ...

            case 'storage/unknown':
               // Unknown error occurred, inspect the server response
               break;
         }
         return false
      });
}