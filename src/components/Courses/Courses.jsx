import { useState } from 'react';

import Box from 'styles.js/Box';
import { Button } from 'common';
import { SearchBar, CourseCard } from './components';

const Courses = ({ onAddNewCourseClick, coursesList, authorsList }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const getAuthors = (authorsIds) => {
		const authors = authorsList
			.filter((authorItem) => authorsIds.includes(authorItem.id))
			.map((author) => author.name);

		return authors.join(', ');
	};

	const visibleCoursesList = () => {
		const displayedCourses = coursesList.filter(
			(course) =>
				course.title.toUpperCase().includes(inputValue.toUpperCase()) ||
				course.id.includes(inputValue)
		);
		return displayedCourses;
	};

	return (
		<>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='end'
				mb={4}
				mt={2}
			>
				<SearchBar inputValue={inputValue} onInputChange={handleChange} />
				<Button
					buttonText='Add new course'
					onButtonClick={onAddNewCourseClick}
				/>
			</Box>
			<ul>
				{visibleCoursesList().map(
					({ id, title, description, creationDate, duration, authors }) => {
						return (
							<CourseCard
								key={id}
								title={title}
								description={description}
								created={creationDate}
								duration={duration}
								authors={getAuthors(authors)}
							/>
						);
					}
				)}
			</ul>
		</>
	);
};

export default Courses;
