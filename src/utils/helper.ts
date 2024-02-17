import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

export function scrollToSection(id: string) {
   const section = document.getElementById(id)
   if (section) {
      scrollTo({ top: section.offsetTop - 120, behavior: "smooth" })
   }
}


export function checkFullTime(time: number) {

   const now = dayjs(time).toNow(true)
   const unix = now.split(' ')

   switch (unix[1]) {
      case 'hours':
      case 'minutes':
      case 'few':
         return false;
      default:
         return true;
   }
}


export function sleep(sm = 1000) {
   return new Promise(resolve => setTimeout(resolve, sm))
}

export function getFetchReturn(msg: string, cb: (reason: any) => void, status = true, data?: any) {
   return cb({
      msg,
      isSuccess: status,
      data
   })
}