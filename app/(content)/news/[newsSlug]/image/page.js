import React from 'react';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news'; // Adjust the import path as necessary

const ImagePage = async ({ params }) => {
	const newsItemSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsItemSlug);
	if (!newsItem) {
		notFound();
	}
	return (
		<div className='fullscreen-image'>
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
};

export default ImagePage;
