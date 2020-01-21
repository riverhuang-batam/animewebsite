import React from 'react'
import {Input, Form ,Button, InputGroupAddon, InputGroup, Container} from 'reactstrap'

const Search = () =>(
    <Container>
    <Form>
        <InputGroup>
        <Input type="search" placeholder="Search Anime..."/>
        <InputGroupAddon addonType="append">
        <Button color="primary">Search</Button>
        </InputGroupAddon>
        </InputGroup>
    </Form>
    </Container>
)
export default Search;