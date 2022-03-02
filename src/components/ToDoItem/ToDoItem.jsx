import { useState } from 'react'
import {
Card,
CardBody,
CardTitle,
CardText,
Button
} from 'reactstrap'

const ToDoItem = (props) => {
    const [status, setIsDone] = useState(props.status)

    const switchButton = () => {
        if(status == "Done"){
            setIsDone("On Going")
        } else{
            setIsDone("Done")}
    }

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
            {status == "Done" ? 
            <Button onClick={switchButton} color='success'>
            Done
            </Button>: 
            <Button onClick={switchButton} color='danger'>
            On Going
            </Button>}
            
            </div>
        </CardBody>
    </Card>
)
}

export default ToDoItem