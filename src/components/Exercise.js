import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import GymModal from './GymModal';
import BodyParts from './BodyParts';
import Equipment from './Equipment';
import Reps from './Reps';

const Exercise = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div>
      <Card className="my-2">
        {props.imageshow ?
        <Card.Img
          variant="top"
          src={props.thumbnail}
          alt="IMG"
          style={{cursor: "pointer"}}
          onClick={() => setModalShow(true)}
        /> : <div />
        }
        <Card.Body>
          <Card.Title>
            {props.exercise}
            <Badge variant="dark" className="mx-2">{props.category}</Badge>
          </Card.Title>
          <Card.Text as="div">
            <p><BodyParts bodyparts={props.bodyparts} size="h6" heading={false} /></p>
            <p><Equipment equipment={props.equipment} size="h6" heading={false} /></p>
            <p><Reps reps={props.reps} size="h6" heading={false} /></p>
          </Card.Text>
          <Button 
            variant="primary"
            onClick={() => setModalShow(true)}
            block>
              View Exercise
            </Button>
        </Card.Body>
      </Card>
    </div>

    <GymModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      {...props}
    />
    </>
  );
}


export default Exercise;