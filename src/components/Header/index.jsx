import { Container } from "./styles"
import logo from '../../assets/logo.svg'

export default function Header(){
  return (
    <Container>
      <div>
        <img src={logo} alt="Designo logo" />
        <h1>Designo</h1>
      </div>
      <span></span>
    </Container>
  )
}