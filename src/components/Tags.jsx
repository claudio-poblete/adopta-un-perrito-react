/* eslint-disable react/prop-types */
import { Badge } from "react-bootstrap";

const Tags = ({text, color}) =>{
  return(
    <h4>
      <Badge pill bg={color}>{text}</Badge>
    </h4>
  )
}

export default Tags