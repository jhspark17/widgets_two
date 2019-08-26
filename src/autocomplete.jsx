import React, {useEffect, useState} from 'react'

const Autocomplete = props => {
	let names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"]
	const [fill, setFill] = useState('')
	const [list, setList] = useState(names)
	
	useEffect(() => {
		filterNames(fill.toLowerCase(), names)
	}, [fill])

	useEffect(() => {
		
	}, [list])

	const filterNames = (phrase, names) => {
		console.log(phrase)
		if (!phrase) {
			setList(names);
			return
		}

		let res = [];
		for (let i = 0; i < names.length; i++) {
			if (names[i].toLowerCase().indexOf(phrase) > -1) {
				res.push(names[i]);
			}
		}
		res.length ? setList(res) : setList(["no matches found"])
	}


	const fillText = e => {
		setFill(e.target.value)
		
	}

	const content = (
		<div className="autocomplete">
			<div className="input">
			<input type="text" onChange={fillText}/>
			</div>
			<div className="names">
			<ul>
				{list.map(name => {
					return (
						<li>
							{name}
						</li>
					)
				})}
			</ul>
			</div>
		</div>
	)

	return content;
}

export default Autocomplete;