import React, {useEffect, useState} from 'react'
import LikeIcon from './like-button.svg'

const Like = props => {
	const [like, setLike] = useState(false);
	
	const pressed = () => {
		setLike(!like)
	}
	const increment = () => {
		if (!like) {
			return "Like me"
		} else {
			return "You liked me"
		}
	}
  const content = (
		<div className="like-button">
			<button onClick={pressed} >
				{increment()}
			</button>
		</div>
	)
	return content;
}

export default Like;