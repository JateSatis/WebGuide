import React, { useState } from 'react'
import styled from 'styled-components'
import classes from './Nav.module.css'
import { NavLink, Route } from 'react-router-dom'

const Section = styled.div`
	height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`

const Div = styled.div`
	&:hover ${Section} {
		background-color: #656668;
	}
`

const Nav = ({ inputCleared, info }) => {

	const [isNavOpened, setIsNavOpened] = useState(true)

	const [active, setActive] = useState([
		false, false, false, false, false
	])

	const showMenu = (index) => {
		const updActive = [...active];
		updActive[index] = true;
		setActive(updActive)
	}

	const hideMenu = (index) => {
		const updActive = [...active];
		updActive[index] = false;
		setActive(updActive)
	}


	return (
		<>
			{/* <div className={classes.container_phone} onClick={() => setIsNavOpened(!isNavOpened)}>
					<svg width='30px' height='30px' x="0px" y="0px" viewBox="0 0 384 384">
						<g>
							<rect x="0" y="277.333" width="384" height="42.667" />
							<rect x="0" y="170.667" width="384" height="42.667" />
							<rect x="0" y="64" width="384" height="42.667" />
						</g>
					</svg>
			</div> */}
			<div className={classes.container}>
				<nav className={classes.nav}>
					{info.map(item =>
						<Div>
							<div className={classes.section} onMouseLeave={() => hideMenu(info.indexOf(item))} onMouseOver={() => active[0] || active[1] || active[2] || active[3] || active[4] ? () => { return } : showMenu(info.indexOf(item))}>
								<Section><NavLink to={item.link} className={classes.link} activeClassName={classes.active}><p>{item.section}</p></NavLink></Section>
								{active[info.indexOf(item)] ?
									<div className={classes.course}>
										{info[info.indexOf(item)].courses.map(course =>
											<NavLink to={course.link} activeClassName={classes.active_course} exact>
												<p onClick={() => { setActive([false, false, false, false, false]) }}>{course.name}</p>
											</NavLink>)}
									</div>
									:
									null
								}
							</div>
						</Div>
					)}
				</nav>
			</div>
		</>
	)
}

export default Nav
