import React from 'react'
import { Container } from 'react-bootstrap'
import Links from './Links'
import NavbarComponent from './Navbar'
import TeamGrid from './TeamGrid'

const Main = () => {
	return (
		<div>
			{/* <NavbarComponent /> */}
			<Container className='bg-dark mh-100'>
				<a name="home"><h1 className='text-danger'>Welcome to the Chess 1.5 Site</h1></a>

				<a name='links'><h1 className='text-danger'>Links</h1></a>
				<Links />

				<a name='team'><h1 className='text-danger'>Team</h1></a>
				<TeamGrid />
			</Container>
		</div>
	)
}

export default Main;