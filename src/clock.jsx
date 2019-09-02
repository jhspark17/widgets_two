import React, {useEffect, useState} from 'react'


const Clock = props => {
	const [date, setDate] = useState(new Date().toDateString())
	const [time, setTime] = useState(new Date().toTimeString().slice(0, 12))

	useEffect(() => {
		setTimeout(() => {
			setTime(new Date().toTimeString().slice(0, 12))
		}, 1000)
	}, [time])

	const content = (
		
		<div className="clock">
			<div className="clock-label">
				<h1>Date:</h1>
				<h1>Time:</h1>
			</div>
			<div className="clock-content">
				<div>{date}</div>
				<div>{time}</div>
			</div>		
		</div>
		
	)
	return content
}

export default Clock