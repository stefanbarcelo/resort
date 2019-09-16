import React, { Component } from 'react'
import defaultBcg from '../images/details-2.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		}
	}
	static contextType = RoomContext;
	render() {
		// grab this function from RoomContext
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug)
		console.log(room)
		if (!room) {
			return (
				<div className="error">
					<h3>No such room was found</h3>
					<Link to='/rooms' className="btn-primary">Back to rooms</Link>
				</div>
			)
		}
		const { 
			name, 
			description, 
			capacity, 
			size, 
			price, 
			extras, 
			breakfast, 
			pets, 
			images 
		} = room;
		return (
			<StyledHero image={images[0]}>
				<Banner title={`${name} Room`}>
					<Link to="/rooms" className="btn-primary">
						Back to rooms
				</Link>
				</Banner>
			</StyledHero>
		)
	}
}
