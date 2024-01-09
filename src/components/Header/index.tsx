import { HeaderContainer } from './style'
import logo from '../../assets/favicon.png'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
