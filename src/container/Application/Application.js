import React, { useState } from 'react'
import { Route, NavLink } from 'react-router-dom'
// import { useWindowScroll } from 'react-use'
import './Application.css'
import classes from './Application.module.css'
import courseNames from '../../DataBase/courseNames'
import Wrapper from '../../hoc/Wrapper'
import Home from '../../Components/Home/Home'
import Nav from '../../Components/Nav/Nav'
import Section from '../../Components/Section/Section'
import SectionPage from '../../Components/SectionPage/SectionPage'
import CoursePage from '../../Components/CoursePage/CoursePage'
import AdditInfo from '../../Components/AdditInfo/AdditInfo'

const Application = () => {

	// const { y: pageYOffset } = useWindowScroll();

	const [firstSuggestionShow, setFirstSuggestionShow] = useState(true)

	const [state, setState] = useState(false)

	const [input, setInput] = useState('')

	const [currentSelectedPage, setCurrentSelectedPage] = useState('Теги - кирпичи сайта_html')

	const suggestions = [];
	courseNames.forEach(item => item.courses.filter(course => course.name.toLowerCase().includes(input.toLowerCase())).forEach(course => suggestions.push({ section: item.section === 'Javascript' || item.section === 'Frameworks' ? item.section === 'Javascript' ? 'js' : 'fw' : item.section.toLowerCase(), sect_link: item.link, name: course.name, course_link: `#${course.name}` })))

	const scrollToElement = (id, section) => {
		document.getElementById(currentSelectedPage).style.color = '#660099';
		setInput('')
		window.scrollTo({ top: document.getElementById(`${id}_${section}`).getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2, behavior: 'smooth' })
		document.getElementById(`${id}_${section}`).style = 'color: #cb4757; text-decoration: underline;'
		setCurrentSelectedPage(`${id}_${section}`)
	}


	let firstSuggestion = ''

	if (suggestions.length !== 0) {
		firstSuggestion = suggestions[0].name
	}

	return (
		<Wrapper>
			<a id='search' href={`#${firstSuggestion}`}>...</a>
			{state ? <div className={classes.invisible} onClick={() => setState(false)}>...</div> : null}
			<header id='header' className={classes.header}>
				<nav className={classes.navigation}>
					<Home clicked={() => {setState(false)}} />
					<Nav info={courseNames} />
				</nav>
				<Route path='/' exact render={() => {
					return (
						<div>
							<div className={classes.heading_container}>
								<h1 className={classes.heading}>Современный гид по Веб-Разработке</h1>
							</div>
							<p className={classes.text}>В этом учебнике представлено все, что нужно современному front-end разработчику. Дерзайте!</p>
							<div onClick={() => setState(true)} className={classes.search}>
								<div className={classes.input_svg_container}>
									<svg className={classes.input_svg} x="0px" y="0px" viewBox="0 0 512.005 512.005">
										<g>
											<path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
											S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
											c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
											M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
										</g>
									</svg>
								</div>
								<input spellCheck='false' autocomplete="off" id='input' placeholder='Поиск...' onClick={() => {
									setFirstSuggestionShow(true);
									setState(true)
								}} className={classes.input} onKeyPress={(event) => {
									if (event.code === 'Enter') {
										if (suggestions.length === 0) {
											setInput('')
										} else {
											scrollToElement(document.getElementById('suggestion_container').firstChild.getElementsByTagName('h6')[0].innerHTML, document.getElementById('suggestion_container').firstChild.getElementsByTagName('p')[0].innerHTML)
											setInput('')
										}
									}
								}
								} onChange={event => {
									setFirstSuggestionShow(true)
										setInput(event.target.value)
									}} value={input} type="text" />
								{!state ?
									null :
									<div id='suggestion_container' onMouseEnter={() => setFirstSuggestionShow(false)} onMouseLeave={() => setFirstSuggestionShow(true)} className={classes.suggestions_container}>
										{input === '' ? null :
											suggestions.length === 0 ? <p className={classes.empty}>No mathes found...</p> :
												suggestions.map(sugg => {
													return (
														<div onClick={event => event.target.innerHTML === 'html' || event.target.innerHTML === 'css' || event.target.innerHTML === 'react' || event.target.innerHTML === 'js' || event.target.innerHTML === 'fw' ? () => {return} : event.target.getElementsByTagName('h6').length === 0 ? scrollToElement(event.target.innerHTML, sugg.section) : scrollToElement(event.target.getElementsByTagName('h6')[0].innerHTML, sugg.section)} className={firstSuggestionShow ? suggestions.indexOf(sugg) === 0 ? suggestions.length === 1 ? 'suggestion suggestion_first_only' : 'suggestion suggestion_first' : 'suggestion' : 'suggestion'}>
															<div>
																<NavLink className={classes.suggestion_section} to={sugg.sect_link}><p onClick={() => setInput('')}>{sugg.section}</p></NavLink>
																<h6 className={firstSuggestionShow ? suggestions.indexOf(sugg) === 0 ? 'suggestion_link suggestion_link_first' : 'suggestion_link' : 'suggestion_link'}>{sugg.name}</h6>
															</div>
														</div>
													)
												})
										}
									</div>
								}
							</div>
							<h1 className={classes.heading_bottom}>
								Содержание
							</h1>
							<div className={classes.text_bottom_container}>
								<p className={classes.text_bottom}>
									Три части учебника посвящены трем необходимым языкам для работы с веб-приложениями. С их помощью можно создать почти все что вы захотите
								</p>
								<svg className={classes.triangle} width="40px" height="40px" viewBox="0 0 404.308 404.309">
									<path d="M404.308,303.229H0L202.157,101.08L404.308,303.229z" />
								</svg>
							</div>
						</div>
					)
				}}
				/>
			</header>
			<main>
				<Route path='/' exact render={() => {
					return (
						<div className={classes.main_content}>
							{courseNames.map(section => <Section data={section} />)}
						</div>
					)
				}} />
				{courseNames.map(section => {
					return (
						section.courses.map(course => {
							return (
								<Route path={course.link} exact render={() => {
									return (
										<CoursePage data={courseNames} currentPage={course} currentSection={section} />
									)
								}} />
							)
						})
					)
				})}
				{courseNames.map(section => {
					return (
							<Route path={section.link} exact render={() => {
								return (
									<SectionPage currentSection={section} data={courseNames} />
								)
							}} />
						)
				})}
				<Route path='/' exact><AdditInfo /></Route>
			</main>
			<Route path='/' exact render={() => {
				return (
					<footer>
						<div className={classes.copyright}>
							<h6>© 2020 - 2021 Максим Данилов</h6>
						</div>
						<div className={classes.policy}>
							<a href="/oops">Политика кофиденциальности</a>
							<a href="/oops">О проекте</a>
							<a href="/oops">Пользовательское соглашение</a>
							<a href="/oops">Связаться с нами</a>
						</div>
					</footer>
				)
			}} />
		</Wrapper>

	)

}

export default Application
