export function scrollToSection(id: string) {
   console.log('id:', id);
   const section = document.getElementById(id)
   if (section) {
      scrollTo({ top: section.offsetTop - 120, behavior: "smooth" })
   }
}