import React from 'react';
import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/news/news-list';

const LatestPage = () => {
	const latestNews = getLatestNews();
	return (
		<>
			<h2>Latest News</h2>
			<NewsList news={latestNews} />
		</>
	);
};

export default LatestPage;
