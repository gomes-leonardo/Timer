import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
