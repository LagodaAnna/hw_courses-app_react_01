// a helper to get current date in the correct format
export const dateGenerator = () => {
	const date = new Date();
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString();
	return day + '/' + month + '/' + year;
};
