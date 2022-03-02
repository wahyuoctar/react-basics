import {
Card,
CardBody,
CardTitle,
CardText,
Button
} from 'reactstrap'

const ToDoItem = (props) => {
return (
    <Card className='my-2'>
        <CardBody>
            <div className="d-flex justify-content-between">
                <div>
            <CardTitle tag='h5' className='fw-bold'>
                {props.date}</CardTitle>
            <CardText>
                {props.action}
            </CardText>
            </div>
            {props.status == "Done" ? 
            <Button color='success'>
            {props.status}
            </Button>: 
            <Button color='danger'>
            {props.status}
            </Button>}
            
            </div>
        </CardBody>
    </Card>
)
}

export default ToDoItem