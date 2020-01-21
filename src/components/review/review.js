import React, {Component} from 'react' 
import ReviewList from '../reviewlist/reviewlist'
class Review extends Component{
    constructor(){
        super();
        this.state={
            reviews:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.jikan.moe/v3/anime/${this.props.match.params.Id}/reviews/1`)
        .then(res => res.json())
        .then(reviewAnime =>{
            console.log(reviewAnime.reviews);
            this.setState({reviews: reviewAnime.reviews})
        })
        .catch(err => console.log(err))
    }
    render(){
        console.log(this.props)
        const {reviews} = this.state;
        return(
            <div>
                <ReviewList reviews={reviews}/>
            </div>
        )
    }
}
export default Review;