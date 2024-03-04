import { useState } from 'react';

export const useReview = () => {
	const [isReviewOpened, setIsReviewOpened] = useState(false);

	const handleOpenReview = () => {
		setIsReviewOpened(true);
	};

	const handleCloseReview = () => {
		setIsReviewOpened(false);
	};

	return {
		isReviewOpened,
		handleOpenReview,
		handleCloseReview
	};
};