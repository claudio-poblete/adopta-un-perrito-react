import Header from './components/Header'
import MyCard  from './components/MyCard'
import Footer from './components/Footer'
import perroUno from './assets/img/perroUno.jpg'
import perroDos from './assets/img/perroDos.jpg'
import perroTres from './assets/img/perroTres.jpg'
import perroCuatro from './assets/img/perroCuatro.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const dogData = [
    {
      id: 1,
      image: perroUno,
      name: 'Perrito Uno',
      description: 'Pequeña descripción del perrito Uno',
      tagText: 'Adoptar',
      tagColor: 'success'
    },

    {
      id: 2,
      image: perroDos,
      name: 'Perrito Dos',
      description: 'Pequeña descripción del perrito Dos',
      tagText: 'Adoptar',
      tagColor: 'danger'
    },

    {
      id: 3,
      image: perroTres,
      name: 'Perrito Tres',
      description: 'Pequeña descripción del perrito Tres',
      tagText: 'Adoptar',
      tagColor: 'warning'
    },

    {
      id: 4,
      image: perroCuatro,
      name: 'Perrito Cuatro',
      description: 'Pequeña descripción del perrito Tres',
      tagText: 'Adoptar',
      tagColor: 'info'
    }
  ]

  return (
    <div className='full-container'>
      <div>
        <Header title="Adopta un perrito"/>
      </div>
      <div className='main-container'>
        <Container fluid='md'>
          <Row>
            {dogData.map((dog)=>(
              <Col key={dog.id}>
                <MyCard
                  image={dog.image}
                  name={dog.name}
                  description={dog.description}
                  tagText={dog.tagText}
                  tagColor={dog.tagColor}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className='footer-container'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
