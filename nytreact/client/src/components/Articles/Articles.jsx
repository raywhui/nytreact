import React from "react";
import './Articles.css';
import API from '../../utils/API.js';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';


const Articles = props => (
  	<Segment clearing className='segmentHeader'>
  	 	<Header as='h2' floated='left'>{props.articleName}</Header>
  	 	<Button floated='right' color='facebook' size='large'><Icon name='star' labelPosition='left'/>Save</Button>
    </Segment>
);

export default Articles;