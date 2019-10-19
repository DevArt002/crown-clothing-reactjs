import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = props => {
	const { title, subtitle, imageUrl, size, history, linkUrl, match } = props;

	return (
		<div
			className={`menu-item ${size}`}
			onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
		>
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

export default withRouter(MenuItem);
