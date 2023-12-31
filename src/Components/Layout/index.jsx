import './Layout-style.css'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center layout-container bg-white text-black dark:bg-gray-900 dark:text-white '>
      {children}
    </div>
  )
}

export {Layout}