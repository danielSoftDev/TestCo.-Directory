import {
	CircularProgress,
	IconButton,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useEffect } from 'react';
import {
	Employee,
} from '../../models/Models';
import { DirectoryContext } from './DirectoryContext';

const DirectoryTable = () => {
	const context = useContext(DirectoryContext)
	const { employeeList, errorModal, page, range } =
		context.directoryState;
    const {directoryState, setDirectoryState} = context;

	async function getEmployees() {
		await fetch(
			'https://dummy.restapiexample.com/api/v1/employees'
		)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((response) => {
				setDirectoryState({
					...directoryState,
					employeeList: response.data,
					range: [0, 6],
					errorModal: false,
				});
			})
			.catch((error) => {
				console.log('Error fetching data: ', error);
				setDirectoryState({
					...directoryState,
					errorModal: true,
				});
			});
	}

	useEffect(() => {
		if (employeeList.length < 1 && !errorModal) {
			getEmployees();
		}
	}, [errorModal]);

	useEffect(() => {
		setDirectoryState({
			...directoryState,
			range: [(page - 1) * 6, page * 6],
		});
	}, [page]);

	return (
		<>
			<Stack
				height='100%'
				sx={{
					minHeight: 376,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{employeeList.length > 1 ? (
					<Table
						sx={{ flex: 'auto', minWidth: 650 }}
						aria-label="simple table"
					>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Salary</TableCell>
								<TableCell>Age</TableCell>
								<TableCell align="right">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{employeeList
								.slice(range[0], range[1])
								.map((employee: Employee, value) => (
									<TableRow
										key={employee.id}
										sx={{backgroundColor: (value%2===0) ? '#e8e8e8': ''}}
									>
										{Object.entries(employee).map(
											([key, value]) =>
												key ===
												'profile_image' ? undefined : (
													<TableCell
														sx={{
															width:
																key === 'id'
																	? '60px'
																	: '300px',
														}}
														variant={
															key === 'employee_name'
																? 'head'
																: 'body'
														}
														key={key}
													>
														{value}
													</TableCell>
												)
										)}
										<TableCell align="right">
											<IconButton
												aria-label="edit"
												onClick={() => {
													console.log(
														'edit entry ',
														employee.id
													);
												}}
											>
												<EditIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				) : (
					<CircularProgress />
				)}
			</Stack>
		</>
	);
};

export default DirectoryTable;
