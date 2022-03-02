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
                2 Mar 2022</CardTitle>
            <CardText>Belajar Programming</CardText>
            </div>
            <Button color='success'>Done</Button>
            </div>
        </CardBody>
    </Card>
)
}

export default ToDoItem