import { Card, CardBody, CardTitle, CardSubtitle, CardFooter, CardText, Button,
} from 'reactstrap'
import {FaRegThumbsUp} from 'react-icons/fa'
import newyork from '../../assets/images/newyork.jpeg'

const username = "seto"
const location = "BSD"
const numberOfLikes = 13523
const caption = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae perspiciatis ad eligendi tempore perferendis deserunt ratione ullam nostrum suscipit vitae! Hic quae reprehenderit atque eveniet. Tenetur vitae totam inventore cumque fugiat sequi eum nisi commodi, natus quae tempora, consequuntur dolores expedita, officiis sed quibusdam perspiciatis dicta. Similique debitis quaerat earum?"

const ContentCard = () => {
    const likePost = (amount) =>{
        alert(`Liked Post ${amount}!`)
    }
    return (
        <Card>
        <CardBody>
            <CardTitle tag="h5" className='fw-bold'>{username}</CardTitle>
            <CardSubtitle tag="h6" className='text-muted mb-4'>{location}</CardSubtitle>

            <img style={{width: "100%"}} className='rounded img-fluid' src={newyork} alt="user's content" />
        
        <CardText tag="h6" className='fw-bold mt-3'>{numberOfLikes.toLocaleString()} Likes</CardText>
        <CardText>
            <span className='fw-bold'>{username}</span>{" "}
            {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
        </CardText>

        <Button onClick={() => likePost(14)} color='danger' className='d-flex justify-content-center align-items-center'>
            Like &nbsp; <FaRegThumbsUp className='mx-1'/></Button>
        </CardBody>
        </Card>
    )
}

export default ContentCard