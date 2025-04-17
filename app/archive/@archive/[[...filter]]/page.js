import React from 'react';
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from '@/lib/news';
import NewsList from '@/components/news/news-list';
import Link from 'next/link';
const FilteredNewsPage = ({ params }) => {
	const filter = params.filter;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	let news;
	let links = getAvailableNewsYears();

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedYear && selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = [];
	}

	let newsContent = <p>No news found for the selected period.</p>;

	if (news) {
		newsContent = <NewsList news={news} />;
	}
	console.log(filter);

	return (
		<>
			<header id='archive-header'>
				<nav>
					<ul>
						{links.map((link) => {
							const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
};

export default FilteredNewsPage;
