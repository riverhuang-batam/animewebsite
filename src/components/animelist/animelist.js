import React from 'react'
import Cards from '../cards/cards'
import {Row, Col} from 'reactstrap'
const AnimeList = ({animes}) =>{
    console.log(animes)
        return(
            <div>
                <Row>
        {animes.map(animeItem =>
            (
                <Col md="4" key={animeItem.mal_id}>
                <Cards animeItem={animeItem} />
                </Col>
            )
            )}
            </Row>
            
       
    </div>
        )
}
export default AnimeList