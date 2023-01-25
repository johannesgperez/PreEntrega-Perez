import './styles/ItemListContainer.css'
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) => {
    return(
        <Container>
            <h2 className=''>
                {greeting}
            </h2>
        </Container>
    )
}

export default ItemListContainer

