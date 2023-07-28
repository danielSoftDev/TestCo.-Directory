import { Box, Typography } from '@mui/material';
import React from 'react';

function DirectoryTableHeader() {
	return (
		<>
			<Box
				borderBottom={2}
				borderColor="grey500"
				marginBottom="24px"
				paddingBottom="8px"
			>
				<Typography
					variant="h3"
                    paddingTop='40px'
					sx={{ fontWeight: 'bold', fontSize: '32px' }}
				>
					Employee Directory
				</Typography>
			</Box>
			<Typography
				paddingBottom="16px"
			>
				This table contains the most up-to-date
				information available and is updated on a weekly
				basis.If you see incorrect information, contact the
				Human Resources Department at Ext. 49.
			</Typography>
		</>
	);
}

export default DirectoryTableHeader;
