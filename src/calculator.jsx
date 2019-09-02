import React, {useEffect, useState} from 'react'

const Calculator = props => {

	const content = (
		<div className="calculator"> 
			<input className="calc-input"/>
			<div className="calc-row">
			<button>
					AC
				</button>
				<button>
					+/-
				</button>
				<button>
					%
				</button>
				<button>
					/
				</button>
			</div>
			<div className="calc-row">
				<button >
					1
				</button>
				<button>
					2
				</button>
				<button>
					3
				</button>
				<button>
					+
				</button>
			</div>
			<div className="calc-row">
				<button>
					4
				</button>
				<button>
					5
				</button>
				<button>
					6
				</button>
				<button>
					-
				</button>
			</div>
			<div className="calc-row">
			<button>
					7
				</button>
				<button>
					8
				</button>
				<button>
					9
				</button>
				<button>
					*
				</button>
			</div>
			<div className="calc-row">
			<button id="zero">
					0
				</button>
				<button>
					.
				</button>
				<button>
					=
				</button>
			</div>
			</div>
	
	)
	return content;
}

export default Calculator;