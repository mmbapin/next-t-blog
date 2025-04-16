import React from 'react';

const NewsDetailsPage = ({ params }) => {
	const newsId = params.newsSlug;
	return (
		<>
			<h1>News Details Page</h1>
			<h1>News Id : {newsId}</h1>
		</>
	);
};

export default NewsDetailsPage;
