/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ title })=>{
  return(
    <Navbar>
      <Container>
        <h1>{title}</h1>
      </Container>
    </Navbar>
)
}

export default Header