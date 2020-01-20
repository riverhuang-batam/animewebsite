import React from 'react'
import {Card, Button, CardImg} from 'reactstrap'

const Cards = ({animeItem}) =>(
    <div key={animeItem.mal_id}>
                    <Card className="mt-4">
            
            <CardImg src={animeItem.image_url} alt={animeItem.Title} width="100px" height="500px"/>
            <h2 className="text-center" >{animeItem.title}</h2>
                <p>Rank: {animeItem.rank}</p>
                <p>Episodes: {animeItem.episodes} </p>
            <p>Start date: {animeItem.start_date}</p>
            <p>End date: {animeItem.end_date}</p>
            <p>Members: {animeItem.members}</p>
            <p>Scores: {animeItem.score}</p>
            <Button color="primary">Review</Button>
            </Card>
            </div>
)
export default Cards;