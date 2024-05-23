/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import Tags from './Tags'

const MyCard = ({image, name, description, tagText, tagColor}) =>{
  return(
    <Card style={{width:'18rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags text={tagText} color={tagColor}/>
      </Card.Body>
    </Card>
  )
}

export default MyCard