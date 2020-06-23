import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.div`
  .logo {
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    background: ${props => props.theme.red};
    padding: 5px;
    background-clip: 20px;
    font-weight: 600;
  }
`

const Header = () => (
    <div>
      <Logo className="bar">
        <a className="logo" href="">Sick Fits!</a>
        <Nav />
      </Logo>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );

export default Header;
