import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

export function scrollToSection(id: string) {
   console.log('id:', id);
   const section = document.getElementById(id)
   if (section) {
      scrollTo({ top: section.offsetTop - 120, behavior: "smooth" })
   }
}



export function checkFullTime(time: number) {

   const now = dayjs(time).toNow(true)
   const unix = now.split(' ')
   console.log("🚀 ~ checkFullTime ~ unix:", unix)


   switch (unix[1]) {
      case 'hours':
      case 'minutes':
      case 'few':
         return false;
      default:
         return true;
   }
}
