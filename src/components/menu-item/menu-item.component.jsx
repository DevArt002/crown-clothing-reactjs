import React from 'react';

import './menu-item.styles.scss';

const MenuItem = props => {
	const { title, subtitle, imageUrl, size } = props;

	return (
		<div className={`menu-item ${size}`}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<span className="title">{title}</span>
				<span className="subtitle">{subtitle}</span>
			</div>
		</div>
	);
};

export default MenuItem;
