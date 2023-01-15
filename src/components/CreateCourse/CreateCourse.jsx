import { useState, useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { pipeDuration, dateGenerator, checkCourse } from 'helpers';

import Box from 'styles.js/Box';

import { Input, Button, Title, TextArea } from 'common';
import { AuthorsList, EmptyAuthorList } from './components';

const CreateCourse = ({ onCreateNewCourseClick, authorsList, addAuthor }) => {
	const [titleValue, setTitleValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authors, setAuthors] = useState(authorsList);

	const handleInputs = (event) => {
		const { name, value } = event.target;

		switch (name) {
			case 'title':
				setTitleValue(value);
				break;
			case 'author':
				setAuthorName(value);
				break;
			case 'duration':
				setDuration(value);
				break;
			case 'description':
				setDescriptionValue(value);
				break;
			default:
				return;
		}
	};

	const formattedDuration = useMemo(() => {
		return pipeDuration(duration);
	}, [duration]);

	const handleCreateAuthor = () => {
		if (authorName.length < 2) {
			alert('Author name length should be at least 2 characters');
			return;
		}

		const newAuthor = {
			id: uuidv4(),
			name: authorName,
		};

		addAuthor(newAuthor);
		setAuthors((prev) => [...prev, newAuthor]);
		setAuthorName('');
	};

	const handleCreateCourse = () => {
		const isCourseValid = checkCourse(
			titleValue,
			courseAuthors,
			descriptionValue,
			duration
		);

		if (!isCourseValid) {
			return;
		}

		const date = dateGenerator();
		const newCourse = {
			id: uuidv4(),
			title: titleValue,
			description: descriptionValue,
			creationDate: date,
			duration,
			authors: courseAuthors.map((author) => author.id),
		};

		onCreateNewCourseClick(newCourse);
	};

	const handleAddOrDeleteAuthor = (
		listForDelete,
		setListForDelete,
		setListForAdd,
		event
	) => {
		const { id } = event.target.parentNode;

		const author = listForDelete.find((author) => author.id === id);
		const updatedAuthorList = listForDelete.filter(
			(author) => author.id !== id
		);

		setListForAdd((prevState) => [...prevState, author]);
		setListForDelete(updatedAuthorList);
	};

	return (
		<Box bg='#523264' color='#ffae99' p={7} mt={6}>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='end'
				mb={5}
			>
				<Box width={1 / 2}>
					<Input
						labelText='Title'
						placeholderText='Enter title...'
						inputValue={titleValue}
						onInputChange={handleInputs}
						name='title'
					/>
				</Box>
				<Button
					onButtonClick={handleCreateCourse}
					buttonText='Create course'
					sx={{ gridRow: '1', gridColumn: '4 / 5' }}
				/>
			</Box>

			<Box p={4}>
				<TextArea
					placeholder='Enter description...'
					value={descriptionValue}
					onChange={handleInputs}
					name='description'
					label='Description'
				/>
			</Box>

			<Box
				display='grid'
				gridTemplateColumns='1fr 1fr'
				gridTemplateRows='1fr 1fr'
				gridColumnGap={8}
			>
				<Box gridColumn={1} gridRow={1}>
					<Title>Add author</Title>
					<Box mb={4}>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
							inputValue={authorName}
							onInputChange={handleInputs}
							name='author'
						/>
					</Box>
					<Box display='flex' justifyContent='center'>
						<Button
							onButtonClick={handleCreateAuthor}
							buttonText='Create author'
						/>
					</Box>
				</Box>

				<Box gridColumn={2} gridRow={1}>
					<Title>Authors</Title>
					{authors.length ? (
						<AuthorsList
							authors={authors}
							onButtonClick={handleAddOrDeleteAuthor.bind(
								this,
								authors,
								setAuthors,
								setCourseAuthors
							)}
							buttonText='Add author'
						/>
					) : (
						<EmptyAuthorList />
					)}
				</Box>

				<Box gridColumn={1} gridRow={2}>
					<Title>Duration</Title>
					<Input
						labelText='Duration'
						placeholderText='Enter duration in minutes...'
						inputValue={duration}
						onInputChange={handleInputs}
						name='duration'
					/>
					{duration ? (
						<p>Duration: {formattedDuration} hours</p>
					) : (
						<p>Duration: 00:00 hours</p>
					)}
				</Box>

				<Box gridColumn={2} gridRow={2}>
					<Title>Course Authors</Title>
					{courseAuthors.length ? (
						<AuthorsList
							authors={courseAuthors}
							onButtonClick={handleAddOrDeleteAuthor.bind(
								this,
								courseAuthors,
								setCourseAuthors,
								setAuthors
							)}
							buttonText='Delete author'
						/>
					) : (
						<EmptyAuthorList />
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default CreateCourse;
