
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer.jsx'
import Header from '../Common/Header.jsx'
const UserLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default UserLayout
