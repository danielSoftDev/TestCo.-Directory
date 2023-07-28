import { Box } from '@mui/material';
import { memo } from 'react';

import { DirectoryProvider } from './DirectoryContext';
import DirectoryErrorModal from './DirectoryErrorModal';
import DirectoryTable from './DirectoryTable';
import DirectoryTableFooter from './DirectoryTableFooter';
import DirectoryTableHeader from './DirectoryTableHeader';

const DirectoryBody = () => {

	return (
		<Box
			display="flex"
			flexDirection="column"
			flex="auto"
			marginLeft="auto"
			marginRight="auto"
			sx={{
				minHeight: '720px',
				backgroundColor: '#f2f2f2',
			}}
		>
			<DirectoryProvider>
				<DirectoryErrorModal />
				<DirectoryTableHeader />
				<DirectoryTable />
				<DirectoryTableFooter />
			</DirectoryProvider>
		</Box>
	);
};
export default memo(DirectoryBody);
