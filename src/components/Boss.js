import './styles/Boss.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Boss = ({title}) => {
    return(
    <Card className="bg-dark text-white">
      <Card.Img src='http://cdn.roland.com/assets/promos/jpg/billboard_ce-2w.jpg' alt="Card image" />
      <Card.ImgOverlay>
        <Container>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <strong>Pedales Boss </strong> es la tienda oficial de la prestigiosa marca <strong>BOSS </strong> en Latinoamérica
        </Card.Text>
        <Card.Text>Atrevete a sonar como un Profesional!</Card.Text>
        <Button variant="primary">Comprar</Button>
        </Container> 
      </Card.ImgOverlay>
    </Card>
      
    )
}

export default Boss