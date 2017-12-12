import React from "react";
import './SavedArticles.css';
import { Header, Segment, Button, Divider, Icon } from 'semantic-ui-react'

const SavedArticles = props => (
  	<Segment clearing className='segmentHeader'>
  		<div className='dividing'>
  	 		<Header as='h3' floated='left'>{props.articleName}  |  Date Written: {props.articleDate}</Header>
  	 		<Button floated='right' color='facebook' size='large'><Icon name='remove' labelPosition='left'/>Remove</Button>
  	 	</div>
  	 	<Divider clearing/>
  	 	<Header as='h4' floated='left'>{props.description}</Header>
    </Segment>
);

export default SavedArticles;