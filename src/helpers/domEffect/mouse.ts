export function moveMouseToMoveImage(e: MouseEvent, id: string) {
   const root = document.documentElement
   const moveX = (e.pageX * -1 / 65);
   const moveY = (e.pageY * -1 / 65);
   const avatar = document.getElementById(id)

   if (avatar) {
      if (e.pageX === 0 || e.pageX >= root.clientWidth || e.pageY >= root.clientHeight || e.pageY === 0) {
         avatar.style.backgroundPosition = `${moveX}px ${moveY}px`
      } else {
         avatar.style.backgroundPosition = `${moveX}px ${moveY}px`
      }
   }

}
