import React from "react";
import './Search.css';
import { Header, Input, Segment, Divider, Button } from 'semantic-ui-react'

const Search = props => (
  	<Segment clearing className='segmentHeader'>
  	 	<Header as='h1'>Search</Header>
  	 	<Divider segment/>
  	 	<h2>Topic</h2>
  		<Input fluid placeholder='Topic' size='massive' icon='search'/>
  		<h2>Start Year</h2>
  		<Input fluid placeholder='Start Year' size='massive' icon='search'/>
  		<h2>End Year</h2>
  		<Input fluid placeholder='End Year' size='massive' icon='search'/>
  		<div className='buttonSpacing'>
  			<Button color='facebook' size='massive'>Search</Button>
    	</div>
    </Segment>
);

export default Search;