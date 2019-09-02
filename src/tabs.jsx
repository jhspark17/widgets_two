import React, {useEffect, useState} from 'react'
// import Tab from "./tab.jsx"

const Tabs = props => {
	const {tabs} = props;
	const [curr, setCurr] = useState(tabs[0])

	const content = (
		<div className="tabs">
			<div className="tab-title-container">
			{tabs.map((tab, i) => {
				if (tab.title === curr.title) {
					return (
					<div className="single-tab-curr">
						{tab.title}
					</div>
					)
				} else {
					return (
					<button className="single-tab" onClick={() => setCurr(tabs[i])}>
						{tab.title}
					</button>
					)
				}
			})}
			</div>
			<div className="current-tab-content">
				<div>{curr.content}</div>
			</div>
		</div>
	
	)
	return content;
}

export default Tabs
