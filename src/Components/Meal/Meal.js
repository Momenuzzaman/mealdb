
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Meal.css';

function GroupExample(props) {
    const {strMealThumb,strMeal,strInstructions} = props.meal;
    const {addFood,meal} = props
    return (
        <CardGroup >
        <Card className='card'>
            <Card.Img variant="top" className='img' src={strMealThumb} />
            <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
                {strInstructions.slice(0,50)}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button onClick={()=>addFood(meal)} variant="info">place Order </Button>
            </Card.Footer>
        </Card>
        </CardGroup>
    );
    }

export default GroupExample;