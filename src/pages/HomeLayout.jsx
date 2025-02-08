
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../componets'
const HomeLayout = () => {
  return <>
   <Header></Header>
   <Navbar/>
    <section className='align-element py-20'>
      <Outlet />
    </section>
  </>
}

export default HomeLayout
