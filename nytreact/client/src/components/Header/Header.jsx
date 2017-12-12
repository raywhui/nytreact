import React from "react";
import './Header.css';
import { Header, Divider, Segment } from 'semantic-ui-react';

const HeaderSemantic = () => (
  	<Segment className='segment'>
	    <Header as='h1' color='blue' size='huge'>New York Times Reacts to Scraping!</Header>
	    <Divider section/>
	    <Header.Subheader>
	     	YOU'LL NEVER BELIEVE WHAT HAPPENS AFTER THIS GUY READ THESE 23 FACTS ABOUT POLITICS!
	    </Header.Subheader>
    </Segment>
);

export default HeaderSemantic;
