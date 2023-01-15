import { Button } from 'common';
import { pipeDuration } from 'helpers';

import { List, Authors, LeftPartOfCard } from './CourseCard.styled';

const CourseCard = ({ title, description, authors, duration, created }) => {
	const formattedDuration = pipeDuration(duration);
	return (
		<List>
			<LeftPartOfCard>
				<h2>{title}</h2>
				<p>{description}</p>
			</LeftPartOfCard>
			<div>
				<Authors>Authors: {authors}</Authors>
				<p>Duration: {formattedDuration}</p>
				<p>Created: {created}</p>

				<Button
					buttonText='Show course'
					onButtonClick={() => {
						console.log('Show course click');
					}}
				/>
			</div>
		</List>
	);
};

export default CourseCard;
