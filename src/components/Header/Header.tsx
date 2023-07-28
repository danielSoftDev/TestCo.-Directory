import { Box, Typography } from '@mui/material';
import { memo } from 'react';

const DirectoryHeader = () => {
	return (
		<Box
			sx={{ backgroundColor: '#1A4B89' }}
			display="flex"
			alignItems="center"
			height="54px"
			justifyContent="left"
		>
			<Typography
				variant="h5"
				color="white"
				sx={{ fontWeight: 'bold' }}
				paddingLeft="40px"
			>
				TestCo.
			</Typography>
		</Box>
	);
};

export default memo(DirectoryHeader);