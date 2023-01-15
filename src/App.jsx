import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { mockedAuthorsList, mockedCoursesList } from 'constants';

import theme from 'styles.js/theme';
import Box from 'styles.js/Box';
import 'App.css';
import { Header, Courses, CreateCourse } from 'components';

function App() {
	const [isAddingNewCourse, setIsAddingNewCourse] = useState(false);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const handleAddNewCourseClick = () => {
		setIsAddingNewCourse(true);
	};

	const handleCreateNewCourseClick = (newCourse) => {
		setIsAddingNewCourse(false);
		setCoursesList((prev) => [...prev, newCourse]);
	};

	const handleAddNewAuthor = (newAuthor) => {
		setAuthorsList((prev) => [...prev, newAuthor]);
	};

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Box as='main' p={6}>
				{isAddingNewCourse ? (
					<CreateCourse
						onCreateNewCourseClick={handleCreateNewCourseClick}
						authorsList={authorsList}
						addAuthor={handleAddNewAuthor}
					/>
				) : (
					<Courses
						onAddNewCourseClick={handleAddNewCourseClick}
						coursesList={coursesList}
						authorsList={authorsList}
					/>
				)}
			</Box>
		</ThemeProvider>
	);
}

export default App;
