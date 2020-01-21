import React from 'react'
import {Card, Button, CardImg, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
const Cards = ({animeItem}) =>(
    <div key={animeItem.mal_id}>
                    <Card className="mt-4">
            
            <CardImg src={animeItem.image_url} alt={animeItem.Title} width="100px" height="500px"/>
            <CardBody>
            <h2 className="text-center" >{animeItem.title}</h2>
                <p>Rank: {animeItem.rank}</p>
                <p>Episodes: {animeItem.episodes} </p>
            <p>Start date: {animeItem.start_date}</p>
            <p>End date: {animeItem.end_date}</p>
            <p>Members: {animeItem.members}</p>
            <p>Score: {animeItem.score}</p>
            <Link to={`/animereview/${animeItem.mal_id}`}>
            <Button color="primary">Review</Button>
            </Link>
            </CardBody>
            </Card>
            </div>
)
export default Cards;