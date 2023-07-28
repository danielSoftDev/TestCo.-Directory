import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
} from '@mui/material';
import { useContext } from 'react';
import { DirectoryContext } from './DirectoryContext';

const DirectoryErrorModal = () => {
    const context = useContext(DirectoryContext)
	const {errorModal } =
		context.directoryState;
    const {directoryState, setDirectoryState} = context;

	const handleModalClose = (
		event: React.MouseEvent<HTMLElement>
	) => {
		setDirectoryState({
			...directoryState,
			errorModal: false,
		});
	};

	return (
		<Dialog open={errorModal} onClose={handleModalClose}>
			<DialogContent>Error Retrieving Data</DialogContent>
			<DialogActions>
				<Button onClick={handleModalClose}>Retry</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DirectoryErrorModal;
