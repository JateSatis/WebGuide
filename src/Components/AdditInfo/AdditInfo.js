import React from 'react'
import classes from './AdditInfo.module.css'
import { Button } from '@material-ui/core'

const AdditInfo = () => {
	return (
		<div className={classes.main}>
			<div className={classes.content}>
				<h1 className={classes.header}>Дополнительные материалы</h1>
				<p className={classes.text}>Хотя этот сайт и является собранием важнейшей информации для любого front-end разработчика, всё на свете уместить в него нельзя. Именно поэтому ниже вы можете увидеть полезные ссылки, которые помогут вам в долгом изучении создания сайтов.</p>
				<div className={classes.grid_info}>
					<a className={classes.info_card} target='_blank' href='https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA' style={{
						background: 'linear-gradient(215deg, rgb(255, 106, 106) 21%, rgb(214, 162, 80) 77%)'
					}}>
						<p className={classes.info_card_header}>Ютуб канал</p>
						<div className={classes.info_card_main}>
							<div className={classes.icon_outercont}>
								<div className={classes.icon_innercont}>
									<img src="https://icons-for-free.com/iconfiles/png/512/tube+video+you+youtube+icon-1320185153402885670.png" alt="Icon Of The Channel" />
								</div>
							</div>
							<p>ХАУДИ ХО</p>
						</div>
					</a>
					<a className={classes.info_card} target='_blank' href='https://github.com' style={{
						background: 'linear-gradient(215deg, #372673 21%, #7224BF 77%)'
					}}>
						<p className={classes.info_card_header}>Open-Sourse код</p>
						<div className={classes.info_card_main}>
							<div className={classes.icon_outercont}>
								<div className={classes.icon_innercont}>
									<img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Icon Of The Channel" />
								</div>
							</div>
							<p>GIT HUB</p>
						</div>
					</a>
					<a className={classes.info_card} target='_blank' href='https://ru.reactjs.org/docs/getting-started.html' style={{
						background: 'linear-gradient(215deg, #030BA6 21%, #0477BF 77%)'
					}}>
						<p className={classes.info_card_header}>Документация к фреймворку</p>
						<div className={classes.info_card_main}>
							<div className={classes.icon_outercont}>
								<div className={classes.icon_innercont}>
									<img src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" alt="Icon Of The Channel" />
								</div>
							</div>
							<p>REACT DOCUMENTATION</p>
						</div>
					</a>
					<a className={classes.info_card} target='_blank' href='https://www.sololearn.com/home' style={{
						background: 'linear-gradient(215deg, #02730A 21%, #03A61C 77%)'
					}}>
						<p className={classes.info_card_header}>Приложение на телефон</p>
						<div className={classes.info_card_main}>
							<div className={classes.icon_outercont}>
								<div className={classes.icon_innercont}>
									<img src="https://img.utdstc.com/icon/19d/806/19d806923867a864303a3c0cd478aa412683f78332536aad2a831e914287acce:200" alt="Icon Of The Channel" />
								</div>
							</div>
							<p>SOLOLEARN</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default AdditInfo
