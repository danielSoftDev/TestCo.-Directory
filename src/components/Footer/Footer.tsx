import {
	Box,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { memo } from 'react';

const DirectoryFooter = () => {
	return (
		<Box
			sx={{ width: '100%', backgroundColor: '#1A4B89' }}
			height="54px"
		>
			<Stack
				spacing={2}
				alignItems=""
				justifyContent="center"
				direction="row"
				paddingTop="16px"
				paddingBottom="16px"
				sx={{ marginLeft: 'auto', marginRight: 'auto' }}
			>
				<Typography
					variant="body1"
					color="white"
					sx={{ fontSize: '16px' }}
				>
					©2022 TestCo. All Rights Reserved.
				</Typography>
				<Typography variant="body1" color="white">
					|
				</Typography>
				<Link
					color="inherit"
					underline="always"
					variant="body1"
					sx={{
						color: 'white',
						'&:hover': {
							color: '#e8e8e8',
							cursor: 'pointer',
						},
					}}
				>
					Privacy Policy
				</Link>
				<Typography variant="body1" color="white">
					|
				</Typography>
				<Link
					color="inherit"
					underline="always"
					variant="body1"
					sx={{
						color: 'white',
						'&:hover': {
							color: '#e8e8e8',
							cursor: 'pointer',
						},
					}}
				>
					Terms of Service
				</Link>
			</Stack>
		</Box>
	);
};

export default memo(DirectoryFooter);