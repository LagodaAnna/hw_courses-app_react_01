// a helper to format course duration

export const pipeDuration = (min) => {
	const hours = Math.floor(min / 60);
	const minutes = min % 60;
	return `${hours.toString().padStart(2, '0')} : ${minutes
		.toString()

		.padStart(2, '0')}`;
};
