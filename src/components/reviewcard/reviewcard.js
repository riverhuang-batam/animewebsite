import React, {useState} from 'react'
import {Card, CardBody} from 'reactstrap'
import Moment from 'react-moment'
import './reviewcard.css'
const ReviewCard = ({review}) => {
    const [show, setShow] = useState(true)
    const showAll = () => setShow(false)
    const showLess = () => setShow(true)
    const MAX_LENGTH = 250
    return(
        <Card className="mt-4">
        <CardBody>
            <div key={review.mal_id}>
                <img
                    alt={review.reviewer.image_url}
                    src={review.reviewer.image_url}
                    width="50px"
                    height="50px"/>
                <span>{review.reviewer.username}, 
                <Moment format='MM/DD/YYYY'>
                {review.date}
                </Moment>
                </span>
                <p>
                    {
                    review.content.length >= MAX_LENGTH && show ?
                    
                        
                        (
                            <div>
                            {review.content.substring(0, MAX_LENGTH)}
                            <p className="see" onClick={showAll}>see more</p>
                            </div>
                        )
                        
                    
                        
                        :
                        (
                            <div>
                                {review.content}
                                <p className="see" onClick={showLess}>see Less</p>
                            </div>
                        )
                        
                    }
                    {/* {review.content}
                    {console.log(review.content.length)} */}
                </p>
                <p>
                    Overall: {review.reviewer.scores.overall}
                </p>
                <p>
                    Story: {review.reviewer.scores.story}
                </p>
                <p>
                    Animation: {review.reviewer.scores.animation}
                </p>
                <p>
                    Sound: {review.reviewer.scores.sound}
                </p>
                <p>
                    Character: {review.reviewer.scores.character}
                </p>
                <p>
                    Enjoyment: {review.reviewer.scores.enjoyment}
                </p>
            </div>
        </CardBody>
    </Card>
    )
}
export default ReviewCard;