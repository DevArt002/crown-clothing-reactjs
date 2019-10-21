import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionPage from '../../components/collection/collection.component';
import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directory/directory.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Homepage extends Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching } = this.props;

		return (
			<Switch>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<HomePageContainer>
							<Directory />
						</HomePageContainer>
					)}
				/>
				<Route
					exact
					path={`${match.path}/shop/:collectionId`}
					render={props => (
						<div className="shop-page">
							<CollectionPageWithSpinner
								isLoading={isCollectionFetching}
								{...props}
							/>
						</div>
					)}
				/>
			</Switch>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
