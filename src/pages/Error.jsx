import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return <main className='grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <p className='text-8xl font-semibold text-primary'>404</p>
        <h1 className='text-4xl font-bold mt-3 tracking-tight sm:text-5xl'>Page Not Found</h1>
        <p className='mt-6 text-lg leading-7'>Sorry, we do not find page, we are looking for</p>
        <div className='mt-10 '>
          <Link to={"/"}><button className='btn btn-secondary'>Go Back Home</button></Link>
        </div>
      </div>
  </main>
  }
  return <main className='grid min-h-[100vh] place-items-center px-8'>
    <h4 className='text-center font-bold text-4xl'>There is an error...</h4>
  </main>
}

export default Error
