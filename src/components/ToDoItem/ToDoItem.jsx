import { useState } from 'react'
import {
Card,
CardBody,
CardTitle,
CardText,
Button
} from 'reactstrap'
import moment from 'moment'

const ToDoItem = (props) => {

return (
    <Card className='my-2'>
        <CardBody>
            <div className="d-flex justify-content-between">
                <div>
            <CardTitle tag='h5' className='fw-bold'>
                {moment(props.date).format("DD MMMM YYYY")}</CardTitle>
            <CardText>
                {props.action}
            </CardText>
            </div>
            {props.isDone ? (
            <div>
                <Button onClick={props.editProgress} color='success'>Done</Button>
                <Button onClick={props.deleteData} color='danger'>Delete</Button>
            </div>): 
            (<div>
                <Button onClick={props.editProgress} color='warning'>On Going</Button>
                <Button onClick={props.deleteData} color='danger'>Delete</Button>
            </div>)}
            
            </div>
        </CardBody>
    </Card>
)
}

export default ToDoItem