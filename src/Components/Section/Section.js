import React from 'react'
import dataBase from '../../DataBase/courseNames'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import CoursePage from '../CoursePage/CoursePage'
import './Section.css'
import classes from './Section.module.css'
import courseNames from '../../DataBase/courseNames'

const Section = ({ data }) => {

	const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

	return (
		<div className={classes.section}>
			<div className={classes.main}>
				<div onClick={scrollToTop} className={classes.section_heading}>
					<NavLink className={classes.section_heading_link} to={data.link}><h1 className={data.section}>{data.section}</h1></NavLink>
				</div>
				<div className={classes.section_courses_list}>
					{data.courses.map(course =>
						<div> 
							<div className={classes.section_course}>
								<p className={classes.section_course_number}>{`${dataBase.indexOf(data) + 1}.${data.courses.indexOf(course) + 1}`}</p>
								<NavLink className={classes.section_course_link} to={course.link}><p onClick={scrollToTop} id={`${course.name}_${data.section === 'Javascript' ? 'js' : data.section === 'Frameworks' ? 'fw' : data.section.toLowerCase()}`}>{course.name}</p></NavLink>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Section
