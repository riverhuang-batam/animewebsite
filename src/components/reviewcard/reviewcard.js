import React from 'react' 
import {Card, CardBody} from 'reactstrap'

const ReviewCard = ({review}) =>(
    <Card className="mt-4">
        <CardBody>
    <div key={review.mal_id} >
                    <img alt={review.reviewer.image_url} src={review.reviewer.image_url} width="50px" height="50px"/>
                        <span>{review.reviewer.username}</span>
                        <p>
                            {review.content}
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
export default ReviewCard;