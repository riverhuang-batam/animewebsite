import React from 'react'

import {Input, Form ,Button, InputGroupAddon, InputGroup, Container} from 'reactstrap'

const Search = (props) =>{
    return(
    <Container>
    <Form onSubmit={props.searchSubmit}>
        <InputGroup>
        <Input type="search" placeholder="Search Anime..." value={props.searchAnime} onChange={props.searchHandle}/>
        <InputGroupAddon addonType="append">
        <Button color="primary">Search</Button>
        </InputGroupAddon>
        </InputGroup>
    </Form>
    </Container>
    )
}
export default Search;