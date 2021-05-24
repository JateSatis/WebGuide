import React, { useState } from 'react'
import classes from './CoursePage.module.css'
import './CoursePage.css'
import { NavLink, Route } from 'react-router-dom'

let bool = true;

const CoursePage = ({ currentSection, currentPage, data }) => {

	if (window.location !== 'http://localhost:3000/' || window.location !== 'http://localhost:3000/html' || window.location !== 'http://localhost:3000/css' || window.location !== 'http://localhost:3000/javascript' || window.location !== 'http://localhost:3000/react' || window.location !== 'http://localhost:3000/frameworks') {
		document.addEventListener('scroll', () => {
			let arr = []
			let fullArr = [...currentPage.content.chapters.map(chapter => {
				return { top: document.getElementById(chapter.chapter_title !== null ? chapter.chapter_title : null)?.getBoundingClientRect().top, id: chapter.chapter_title }
			}).filter(distance => distance.top !== undefined), { top: document.getElementById('introduction')?.getBoundingClientRect().top, id: 'introduction' }, { top: document.getElementById('summary')?.getBoundingClientRect().top, id: 'summary' }]

			arr = [...currentPage.content.chapters.map(chapter => {
				return { top: document.getElementById(chapter.chapter_title !== null ? chapter.chapter_title : null)?.getBoundingClientRect().top, id: chapter.chapter_title }
			}).filter(distance => distance.top !== undefined), { top: document.getElementById('introduction')?.getBoundingClientRect().top, id: 'introduction' }, { top: document.getElementById('summary')?.getBoundingClientRect().top, id: 'summary' }].filter(distance => distance.top >= 0)

			const arrTops = arr.map(element => element.top)

			bool = false

			if (document.getElementById('aside') !== null) {
				for (let element of fullArr) {
					document.getElementById(`${element.id}_aside`).style.color = '#9b9b9b'
				}
				document.getElementById(`${arr[arrTops.indexOf(Math.min(...arrTops))].id}_aside`).style.color = '#cb4757'
			}
		})
	}

	const [aside, setAside] = useState(false)

	let prevCourse = null;
	let nextCourse = null;

	const scrollToElement = (id) => {
		window.scrollTo({ top: document.getElementById(id).getBoundingClientRect().top + window.pageYOffset - 10, behavior: 'smooth' })
	}

	const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

	const colorAside = () => {
		if (bool) {
			let arr = []
			let fullArr = [...currentPage.content.chapters.map(chapter => {
				return { top: document.getElementById(chapter.chapter_title !== null ? chapter.chapter_title : null)?.getBoundingClientRect().top, id: chapter.chapter_title }
			}).filter(distance => distance.top !== undefined), { top: document.getElementById('introduction').getBoundingClientRect().top, id: 'introduction' }, { top: document.getElementById('summary').getBoundingClientRect().top, id: 'summary' }]

			arr = [...currentPage.content.chapters.map(chapter => {
				return { top: document.getElementById(chapter.chapter_title !== null ? chapter.chapter_title : null)?.getBoundingClientRect().top, id: chapter.chapter_title }
			}).filter(distance => distance.top !== undefined), { top: document.getElementById('introduction').getBoundingClientRect().top, id: 'introduction' }, { top: document.getElementById('summary').getBoundingClientRect().top, id: 'summary' }].filter(distance => distance.top >= 0)

			const arrTops = arr.map(element => element.top)

			bool = false

			if (document.getElementById('aside') !== null) {
				document.getElementById(`${arr[arrTops.indexOf(Math.min(...arrTops))].id}_aside`).style.color = '#cb4757'
			}
		}
	}

	const prevButton =
		<button onClick={scrollToTop} className={classes.course_switch_btn}>
			<svg className={classes.course_switch_svg} width="25px" height="25px" viewBox="0 0 492 492">
				<path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
				C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
				c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
				l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
			</svg>
		</button>

	const nextButton =
		<button onClick={scrollToTop} className={classes.course_switch_btn}>
			<svg className={classes.course_switch_svg} width="25px" height="25px" viewBox="0 0 492.004 492.004">
				<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
				c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
				c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
				c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
			</svg>
		</button>

	if (currentSection.courses.indexOf(currentPage) === 0) {
		prevCourse = <NavLink to={data[data.indexOf(currentSection)].link}>{prevButton}</NavLink>
	} else {
		prevCourse = <NavLink to={currentSection.courses[currentSection.courses.indexOf(currentPage) - 1].link}>{prevButton}</NavLink>
	}

	if (!(data.indexOf(currentSection) + 1 === data.length && currentSection.courses.indexOf(currentPage) + 1 === currentSection.courses.length)) {
		if (currentSection.courses.indexOf(currentPage) + 1 === currentSection.courses.length) {
			nextCourse = <NavLink to={data[data.indexOf(currentSection) + 1].link}>{nextButton}</NavLink>
		} else {
			nextCourse = <NavLink to={currentSection.courses[currentSection.courses.indexOf(currentPage) + 1].link}>{nextButton}</NavLink>
		}
	}

	return (
		<Route path={currentPage.link} render={() => {
			return (
				<>
					<div className={classes.progress_bar_container}>
						<div style={{
							width: `${Math.floor((currentSection.courses.indexOf(currentPage) + 1) / currentSection.courses.length * 100)}%`,
							backgroundColor: '#cb4757',
							color: 'transparent',
							fontSize: '5px',
							transition: 'width 1s'
						}}
							className={classes.progress}>
							Hello
						</div>
					</div>
					<div className={classes.main}>
						<div className={classes.aside_container}>
							<div className={classes.aside_sticky}>
								{aside ?
									<aside id='aside' className={classes.aside}>
										<div>
											<h1 className={classes.aside_section_heading}>Раздел</h1>
											<NavLink to={currentSection.link}>
												<p className={classes.aside_section_link}>{currentSection.section}</p>
											</NavLink>
										</div>
										<div className={classes.aside_navigation}>
											<h1 className={classes.aside_navigation_heading}>Навигация по уроку</h1>
											<a id='introduction_aside' className={classes.aside_navigation_link} onClick={() => scrollToElement('introduction')}>Вступление</a>
											{currentPage.content.chapters.map(chapter => chapter.chapter_title === undefined ? null : <a id={`${chapter.chapter_title}_aside`} className={classes.aside_navigation_link} onClick={() => scrollToElement(chapter.chapter_title)}>{chapter.chapter_title}</a>)}
											<a id='summary_aside' className={classes.aside_navigation_link} onClick={() => scrollToElement('summary')}>Итоги</a>
										</div>
									</aside>
									: null}
								<div className={classes.btns}>
									<div className={classes.btns_helper_container}>
										<button className={classes.menu_btn} onClick={() => {
											setAside(!aside)
											colorAside()
										}}>
											<svg className={classes.menu_svg} height="25" viewBox="0 0 512 512" width="25">
												<path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
												<path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
												<path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
											</svg>
										</button>
										{/* <button className={classes.map_btn}>
											<svg className={classes.map_svg} x="0px" y="0px" viewBox="0 0 477.867 477.867">
												<path d="M460.8,341.333h-34.133v-68.267c0-9.426-7.641-17.067-17.067-17.067H256V136.533h85.333
											c9.426,0,17.067-7.641,17.067-17.067v-102.4C358.4,7.641,350.759,0,341.333,0h-204.8c-9.426,0-17.067,7.641-17.067,17.067v102.4
											c0,9.426,7.641,17.067,17.067,17.067h85.333V256h-153.6c-9.426,0-17.067,7.641-17.067,17.067v68.267H17.067
											C7.641,341.333,0,348.974,0,358.4v102.4c0,9.426,7.641,17.067,17.067,17.067h102.4c9.426,0,17.067-7.641,17.067-17.067V358.4
											c0-9.426-7.641-17.067-17.067-17.067H85.333v-51.2h136.533v51.2h-34.133c-9.426,0-17.067,7.641-17.067,17.067v102.4
											c0,9.426,7.641,17.067,17.067,17.067h102.4c9.426,0,17.067-7.641,17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067H256
											v-51.2h136.533v51.2H358.4c-9.426,0-17.067,7.641-17.067,17.067v102.4c0,9.426,7.641,17.067,17.067,17.067h102.4
											c9.426,0,17.067-7.641,17.067-17.067V358.4C477.867,348.974,470.226,341.333,460.8,341.333z"/>
											</svg>
										</button> */}
									</div>
								</div>
							</div>
						</div>
						<div className={aside ? classes.course_switch_container_slim : classes.course_switch_container}>
							{prevCourse}
						</div>
						<div className={aside ? classes.content_slim : classes.content_fat}>
							<div className={classes.navigation}>
								<NavLink to='/'>
									<button className={classes.navigation_home_button}>
										<svg className={classes.navigation_home_svg} width="16px" height="16px" viewBox="0 0 495.398 495.398">
											<path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
										v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
										c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
										c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
											<path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
										c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
										c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
										</svg>
									</button>
								</NavLink>
								<p className={classes.arrow}>🠖</p>
								<NavLink to={currentSection.link}><p className={classes.navigation_section_link}>{currentSection.section}</p></NavLink>
								<p className={classes.arrow}>🠖</p>
								<p className={classes.navigation_course}>{currentPage.name}</p>
							</div>
							<div className={classes.content_info}>
								<div id='introduction'>
									<h1 className={classes.main_heading}>{currentPage.name}</h1>
									<div className={classes.main_heading_text}>
										{currentPage.content.title_text.map(paragraph => <p>{paragraph}</p>)}
									</div>
								</div>
								{currentPage.content.chapters.map(chapter => {
									return (
										<div className={classes.chapter}>
											{
												chapter.chapter_title !== undefined ?
													<h1 className={classes.chapter_title} id={chapter.chapter_title}>{chapter.chapter_title}</h1> :
													null
											}
											{
												chapter.chapter_text !== undefined ?
													chapter.chapter_text?.map(paragraph => <p>{paragraph}</p>) :
													null
											}
											{
												chapter.chapter_list !== undefined ?
													<ul className={classes.chapter_list} type='circle'>
														{chapter.chapter_list?.map(li => <li>{li}</li>)}
													</ul> :
													null
											}
											{
												chapter.chapter_code !== undefined ?
													currentSection.section === 'Html' ?
														<div className={classes.chapter_code}>
															{chapter.chapter_code?.map(codeLine => {
																return (
																	<div >
																		{codeLine}
																	</div>
																)
															})}
														</div> :
														<div className={classes.chapter_code}>
															{chapter.chapter_code}
														</div> :
													null
											}
											{
												chapter.chapter_img !== undefined ?
													<div className={classes.chapter_img_container}><img className={classes.chapter_img} src={chapter.chapter_img} alt="" /></div> :
													null
											}
											{
												chapter.chapter_table !== undefined ?
													<div className={classes.chapter_table_container}>
														<table className={classes.chapter_table}>
															{chapter.chapter_table?.table_header.map(header => <th>{header}</th>)}
															{chapter.chapter_table?.table_row.map(row => <tr>{row.map(data => <td><p>{data}</p></td>)}</tr>)}
														</table>
													</div> :
													null
											}
										</div>
									)
								})}
								<div id='summary'>
									<h1 className={classes.chapter_title}>Итоги</h1>
									<ol className={classes.chapter_summary_list}>
										{currentPage.content.summary.map(summ => <li>{summ}</li>)}
									</ol>
								</div>
							</div>
						</div>
						<div className={classes.switch_course_next}>
							{nextCourse}
						</div>
					</div>
				</>
			)
		}} />
	)
}

export default CoursePage
