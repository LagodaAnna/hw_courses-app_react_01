export const checkCourse = (
	titleInput,
	courseAuthors,
	descriptionArea,
	durationInput
) => {
	if (!titleInput || !descriptionArea || !durationInput) {
		alert('Please, fill in all fields');
		return false;
	}

	if (!courseAuthors.length) {
		alert('Please, add at least one author in course');
		return false;
	}

	if (descriptionArea.length < 2) {
		alert('Description field must contain at least two symbols');
		return false;
	}

	return true;
};
