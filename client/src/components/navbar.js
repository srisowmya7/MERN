import React from 'react'
import register from './register'

function Navbar() {
  return (
    <div>
      

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AqQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBQcIBAL/xAA/EAABBAADBAUJBgQHAQAAAAABAAIDBAUGEQcSITETQVFhcSIycoGRobHB0RQzQlJiczSCkuEWI0NEU2OiFf/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAvEQEAAQMBBgQDCQAAAAAAAAAAAQIDEQQFEhMhMpExUWFxQaHhFCIzQlKB0fDx/9oADAMBAAIRAxEAPwDeKIiAiIgIiICIiAiK3NPFAzfnlZG3te4Ae9BcRYmXM+X4TpLjmGMPY63GPmrtbHsHtu3auLUJndkdljj7igyKIDqNRyRAREQEREBERAREQEREBERAREQFFs557wfKUYZbe6xeeNY6cOheR2u6mjvPq1VraTnBmUcD6SHcfiNkmOpG7lr1vI7G6jxJA61zZbsz3bUtq5M+exM4vklkOrnntKCZZg2p5nxhz217LcMrHlFU87TvkPHXvG6oXalluSdJclksyfnneZHe06lfCIqgAHIBUcxruDmg+IVdVVFZHCcfxjBXtdhOKW6u7yZHIdz+g6tPrC2hlDbK4yMq5rhY1pOgvV2kBvps+bfYtPIiOwoJo7ELJoJGSRSNDmPY7VrgeRB6wri0bsRzdLVxEZauyl1azvOpl3+nIASWeDgCfEd63kiCIiAiIgIiICIiAiIgIiIOatrWMvxjO90B+teifssIB4Dd88+O9qPUFDlujMOxiS7itu7huNMiZZmfN0M9cuLXOJcRvB3LU9ntUetbF8zx6/Z7OFzj957D72fNFa3J0GpW7MgbJqbKUOI5qidPZlAe2kXaMiB5b+nnO7RyHLQ81gcrbKMwQ5koy4xBXjoV5mzSubOH7+6dQ0AceJAHHThqt8oMMzKWW2Q9CzL+FCM8C37HHofctfbSNl+HDCrGLZbr/ZbNZhkkqR/dysHE7rfwuA4jTgeWnHUbaVHNDmlrhqCNCERxzz4jkqr7sRiGxNE3zY5HMHgDovhGT04ZedheJ1MQjJDqs7JuH6XAkewaLrwEEAjkVxtP9xJ6B+C7DoEupV3HmYmn3BElfRERBERAREQEREBERAREQEVi9crYfTluXZ2QV4Wl0kkh0DQtIZy2v4hekfVyxrSqA6fantBmk7wDwYPafBBuvEcToYXCZsSu16kX555Qwe9RO/tXyhTcWNxGS04dVau9wP8ANoG+9c52p5rlh1m3NLYnd50szy959Z4r4RcN42tuGEMJFTB8Rl05GR0bAfY4rFWNuVokirl6Fo6jLcJ9wYtRqiGFyaQyzSSkaGR5cR2anVfCIirc/wBxJ6J+C7Cw/wDgK37TPgFx7P8AcSeifguwsP8A4Ct+0z4BEl6EREQREQEREBERAREQERYbOWKuwTKuKYlGdJYKz3R+npo3/wBEINJ7YM4SY7jUmE05T/8AMoSFpDTwmmHAuPaGngPAns018qDh1k95PFVRRTLIezzEs3a2jJ9iwxrt02XN3jIQeIY3r05EngD26EKK4bTdiOJU6MZLX2p44A4DkXuDdfeutsPpV8Oo16VOMR168bY42D8LQNAgiGE7KcpYexvS0HXpQNDJclL97+UaN9yz0GVMuV27sGA4YwdgqR/RZlfMjxHG57jo1oJPgiOQboDb1loAAEzwAOobxVlVklE8j5hykcX+06qiMluf7iT0T8F2Fh/8BW/aZ8AuPZ/uJPRPwXYWH/wFb9pnwCJL0IiIgiIgIiICIiAiIgKE7Zi4bOsT3deL4AdOzpmKbKP5/wANfi+TMXpRN3pX1nOjb2vb5TR7WhByyioCCAQdQeSqjJkssW2Ucy4Rbl0EcN2F7yeQaHjU+oarrRccEAggjUFbeyPteio4dBh2ZobEnQtDI7kI3yWgcN9uuuveNdezrRJbpUM2sZiZgOUbLGSaXL7TWrtHPyho538rdT46dqxGK7Z8u165OGQXL05Hkt6IxNB/U53HTwBWmcz5ixDM+KuxDFJAX6bsUTODIWflaPieZQYnwRERVCA4EHkeC6m2f4xHjeT8LuMcC/oGxTDskZ5Lh7R7CFy0p1smzi7LeNClbcThl+RrZP8AqkPBrx3cge7Q9XEkujEREQREQEREBFQnQalWa1uvaaXV5WvA56HksZqpicTPNcTjK+iIskEREHNe1DKEmV8dklrxEYVceX1nAcI3HiYz2acdO7wKhq67xTDaWLUZaOJVo7FaUaPjkGoPYe4jqPUtPZk2K2o5HS5avRyxHiK1wlrm9weAdfWB4lFalRSizs6zhXkLHYDYfp+KKSN4PscqQ7PM4TODWZftDve+No97kEYV+jTtYjcip0K8lizKd2OKMalx+neeA61sTBdjGO2ntdi9urQh14tjPTSEdnU0eOp8FtzKmT8HypWMeF1/854Alsy+VLJ4nqHcNB3IZajx7ZNcwnJwxJkzrOKQky2oI+LBFpxDOslvPXr46DktZ8+I5Lsdab2g7J55rjsRynFGRM7emolwYGk83Rk8NP0nTTq7EGnCQBqToAttbNdl0tl9fGcyxvhha5slekeDn6cQ6TsHI7vM9enI57ZzsuiwZ7MUzE2OfEWnehgB3o6/Yf1O7+Q6u1bPQEVueeKvGZJntYwcy46LDWczVmEtrxPm/V5o+vuXPe1Vmx+JVhst2blzojLOoosc0Ta8K0YHe4q5DmjygJqvk9ZY/wCRXLG1tJM43vlLdOhvx+VJUXzG8SRte3zXAEL6XpRzcgo/imDSRSfa8KJjkHF0bTpr4fRSBFo1Gnov07tff4w2WrtVqc0ovRzHLE7o70e9pwL28HDxCz9S/Vtt1rzNcfy8iPUvPieD18QG8f8ALm04SN+faopew23h79ZWHdB8mVnL+y8mu/rNF1xv0efx/vu7qben1HT92ryTxFCauOX62g6XpWjqkGvv5rK1s0RO4Wa72H8zDvBdNna+mudU7s+rTc0N6jwjKQovBBi9CfgyywHsf5PxXua5rhq0gjtBXoUXaLkZomJctVFVPVGFURFsYiIiAiIgIvNYvVa+vTWImEdRdx9ix1nMlOPUQiSY9w3R71z3dXYtddcQ20WblfTSyNyhWu7gssLwziBvEfBeWTDcKrM35YIWtHW8/VYK1mO5NqIQ2BvaOJ9p+i89WhexaUPcXFvXLIToPDtXk3NfYuV4s2t+qfR20aW7RTm5Xux7pLDRwm5EXQQQPZrpqzh8FEsRgbDengi13WvLWqZU6kOE0nhpJa0F73HmeH9lGcGgdiGL9K8DdDzK/wBuo9617Qs78Wre7EV1eOGekubs115maY80wgZ0cEcZ/C0D2BXERfQxGIw8qeYiIqCo5oc0tcAQeBB61VEGFvZdqz6urnoH93Fp9SwVvBL1Yk9F0rB+KPj7uam6povM1GytPe5xG7Pp/Dsta27b5ZzHq1wRoS0jiOYKqxzmO1Y5zT2tOi2BPUr2Pv4Y397m8fasdNlyhJxYJIj+l+vx1XlXNiXqZzbqifk7aNo255VRhGY8SvR+bbm8C/VXm43iTf8AdE+LWn5LJyZWOp6K36nR/wB1Ydli2PNmhPiSPktX2TaNHhn9p+rPj6Srxx2eYY/iQ/1wf5G/RUOO4kf9wPVG36L0f4Zvf8kH9R+i+m5YtHzp4R4an5Jwtpz+rv8AU39HHl2eB+LYg/nbkHo6D4LzS2J5vvZpH+k8lSCPKw4GW2fBjPnqvbDl2hH5zZJfTd9NFlGzddd657z/AKk6vTUdMdoQ5oJIa0Ek8gAslUwK9Z0LoxEztk4e7mphBVgrjSCFkfot0V5dtnYdEc7tWfZz3NpVT0RhhqOXqlch82s7x+bg0epZgANGgGgHUFVF7FnT2rMYtxh59y7XcnNU5YzMAsS0hXqxue6ZwaSOoc1dwnD2YfWEYIdI7jI7tP0XuRYxp6eNxp5zjEei8WeHw48BERdDWIiICIiAiIgIiICIiBoiIgIiICIiAiIgIiICIiD/2Q==" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/Register" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar