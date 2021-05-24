import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import classes from './Home.module.css'

const Home = ({ clicked }) => {

	const [menu, setMenu] = useState(false)

	const Path = styled.path`
		fill: ${menu ? '#cb4757' : '#656668'};
	`

	const SvgContainer = styled.svg`
		width: 30px;
		height: 30px;
		&:hover ${Path} {
			fill: #cb4757;
		}
	`

	return (
		<div onClick={clicked} className={classes.container}>
			<div onMouseLeave={() => setMenu(false)}>
				<SvgContainer onClick={() => setMenu(!menu)} className={classes.svg} viewBox="0 0 512 512" enable-background="new 0 0 512 512">
					<g>
						<Path className={classes.path} fill="#231F20" d="m429.2,82.8c-46.2-46.3-107.8-71.8-173.2-71.8s-127,25.5-173.2,71.8-71.8,107.8-71.8,173.2 25.5,127 71.8,173.2 107.8,71.8 173.2,71.8 127-25.5 173.2-71.8 71.8-107.8 71.8-173.2-25.5-127-71.8-173.2zm49.6,162.2h-95c-0.9-37.8-6.2-74.2-15.5-106.5 18.1-9.3 35-21 50.5-34.8 35,37.4 57.3,86.8 60,141.3zm-211.8,22h94.9c-0.8,34.8-5.6,68.1-13.9,97.9-25.6-10.3-52.9-16.3-81-17.6v-80.3zm136-178.6c-12.8,11.3-26.8,20.9-41.6,28.9-3.8-10.6-8.1-20.6-12.9-30-9.5-18.8-20.3-34.2-32.2-46 32.5,9.1 62,25.4 86.7,47.1zm-136-52c22.9,5.1 44.5,26.2 61.9,60.6 4.7,9.3 8.9,19.2 12.6,29.7-23.5,9.7-48.6,15.4-74.5,16.7v-107zm81.1,111.4c8.2,29.6 12.9,62.7 13.7,97.3h-94.8v-79.6c28.2-1.3 55.5-7.4 81.1-17.7zm-103.1,97.2h-94.9c0.8-34.6 5.5-67.7 13.7-97.3 25.6,10.4 53,16.4 81.1,17.6v79.7zm.1-208.6v107c-25.9-1.3-51.1-7-74.5-16.7 3.7-10.5 7.9-20.4 12.6-29.7 17.4-34.4 39-55.5 61.9-60.6zm-49.3,4.9c-11.9,11.8-22.7,27.3-32.2,46-4.7,9.4-9,19.4-12.9,30-14.8-8-28.7-17.6-41.6-28.9 24.7-21.7 54.2-38 86.7-47.1zm-102.5,62.4c15.5,13.8 32.4,25.4 50.5,34.8-9.3,32.4-14.7,68.7-15.5,106.5h-95c2.7-54.5 25-103.9 60-141.3zm-60,163.3h95c0.9,38.1 6.3,74.6 15.7,107.1-18,9.3-34.9,20.8-50.3,34.6-35.3-37.5-57.7-87-60.4-141.7zm76.2,157c12.8-11.2 26.7-20.8 41.4-28.7 3.8,10.3 8,20.2 12.7,29.4 9.5,18.8 20.3,34.2 32.2,46.1-32.3-9.1-61.7-25.3-86.3-46.8zm135.6,51.6c-22.9-5.1-44.5-26.2-61.9-60.6-4.6-9.1-8.7-18.8-12.4-29.1 23.4-9.7 48.5-15.4 74.3-16.6v106.3zm-81-110.7c-8.3-29.8-13.1-63.1-13.9-97.9h94.9v80.3c-28.1,1.2-55.4,7.2-81,17.6zm103,110.7v-106.3c25.8,1.3 50.9,6.9 74.3,16.6-3.7,10.3-7.8,20-12.4,29.1-17.4,34.4-39,55.5-61.9,60.6zm49.3-4.9c11.9-11.8 22.7-27.3 32.2-46.1 4.7-9.2 8.9-19.1 12.7-29.4 14.7,7.9 28.6,17.5 41.4,28.7-24.6,21.6-54,37.8-86.3,46.8zm102.2-62c-15.4-13.7-32.3-25.3-50.3-34.6 9.4-32.5 14.8-69.1 15.7-107.1h95c-2.8,54.7-25.2,104.2-60.4,141.7z" />
					</g>
				</SvgContainer>
				{menu ?
					<div className={classes.menu}>
						<svg className={classes.arrow_up} width="30px" height="30px" viewBox="0 0 404.308 404.309">
							<path d="M404.308,303.229H0L202.157,101.08L404.308,303.229z" />
						</svg>
						<h6>Контакты:</h6>
						<div className={classes.menu_links}>
							<a href="https://vk.com/jatemaximnow">VK (Вконтакте)</a>
							<a href="https://web.telegram.org/#/im">Telegram</a>
							<a href="https://www.whatsapp.com/">Whatsapp</a>
						</div>
						<p>Почта: <span onClick={navigator.clipboard.writeText('danilovmaksim303@gmail.com')}>danilovmaksim303@gmail.com</span></p>
					</div>
					: null}
			</div>
			<div name='top' className={classes.heading}>
				<NavLink to='/' activeClassName={classes.active} exact><h1>MODERN WEB-GUIDE</h1></NavLink>
			</div>
		</div>
	)
}

export default Home