import { Pagination, Stack } from '@mui/material';
import { useContext } from 'react';
import { DirectoryContext } from './DirectoryContext';

function DirectoryTableFooter() {
	const context = useContext(DirectoryContext);
	const { employeeList, page } = context.directoryState;
	const { directoryState, setDirectoryState } = context;
	return (
		<Stack
			height="64px"
			marginTop='auto'
			marginBottom='50px'
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Pagination
				count={employeeList ? employeeList?.length / 6 : 1}
				onChange={(event, page: number) =>
					setDirectoryState({
						...directoryState,
						page: page++,
					})
				}
				defaultPage={1}
				siblingCount={0}
				boundaryCount={2}
				page={page}
				sx={{ marginTop: '32px', textAlign: 'centre' }}
				variant="outlined"
				shape="circular"
			/>
		</Stack>
	);
}

export default DirectoryTableFooter;
