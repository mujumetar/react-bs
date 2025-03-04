// import { Container, Row, Stack } from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import './App.css'
import Headers from './component/header.jsx';
import Navbars from './component/navbar.jsx';
import Accord from './component/canvas.jsx';


function App() {

  return (
    <>
      <Headers />
      <Navbars />
      <Accord />
      <div className="my-4">
        <Button className='mx-2' variant='outline-primary'>click me</Button>
        <Button className='mx-2' variant='outline-secondary'>click me</Button>
        <Button className='mx-2' variant='outline-warning'>click me</Button>
        <Button className='mx-2' variant='outline-danger'>click me</Button>
      </div>
    </>
  )
}

export default App
