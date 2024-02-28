import { CustomFlowbiteTheme } from "flowbite-react"

const customFlowbiteTheme: CustomFlowbiteTheme = {
   dropdown: {
      "arrowIcon": "ml-2 h-4 w-4",
      "content": "py-1 ",
      "floating": {
         "item": {
            "container": "",
            "base": "border-0 bg-transparent flex items-center justify-start py-2 px-4 text-sm text-gray-800 hover:text-blue-800 dark:text-zinc-300 dark:hover:text-white focus:outline-none hover:outline-none cursor-pointer w-full ",
            "icon": "mr-2 h-4 w-4"
         },
         "style": {
            "auto": "border rounded-lg overflow-hidden bg-white dark:bg-zinc-700 shadow-xl dark:border-0"
         },
         "target": "w-fit"
      },
      "inlineWrapper": "flex items-center"
   },
   navbar: {
      "root": {
         "base": "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
         "rounded": {
            "on": "rounded",
            "off": ""
         },
         "bordered": {
            "on": "border",
            "off": ""
         },
         "inner": {
            "base": "mx-auto flex flex-wrap items-center justify-between",
            "fluid": {
               "on": "",
               "off": "container"
            }
         }
      },
      "brand": {
         "base": "flex items-center"
      },
      "collapse": {
         "base": "w-full w-full lg:w-auto lg:block",
         "list": "mt-4 flex flex-col md:mt-0 md:flex-row  md:text-sm md:font-medium",
         "hidden": {
            "on": "hidden",
            "off": ""
         }
      },
      "link": {
         "base": "block py-2 pr-4 pl-3 md:p-0",
         "active": {
            "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
            "off": "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
         },
         "disabled": {
            "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
            "off": ""
         }
      },
      "toggle": {
         "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
         "icon": "h-6 w-6 shrink-0"
      }
   }
}

export default customFlowbiteTheme