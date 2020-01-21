import React from 'react'
import ReviewCard from '../reviewcard/reviewcard'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
const ReviewList = ({reviews}) =>{
    console.log(reviews)
    return(
        <div>
            <Link to="/">
            <Button color="primary" className="mt-4">Go Back</Button>
            </Link>
            {
                reviews.map(review =>
                    <ReviewCard review={review} key={review.mal_id}/>
                    )
            }
        </div>
    )
}
export default ReviewList;