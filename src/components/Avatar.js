import React from 'react'
const imgStyle = (size) => {
	return {
	width: `${size}px`,
	borderRadius: '50%'
	}
}
const Avatar = (props) => {
	const {authorsAvatar, size, authorsName} = props
	return (
		<div>
			<img 
				src={authorsAvatar}
				alt={`Avatar of ${authorsName}`}
				style={imgStyle(size)}
			/>
		</div>
	)
}

export default Avatar