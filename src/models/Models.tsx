import { Dispatch, SetStateAction } from 'react';

export interface Employee {
	id: number;
	employee_name: string;
	employee_salary: number;
	employee_age: number;
	profile_image: ImageData;
}

export interface IDirectoryContext {
	directoryState: IDirectoryState,
	setDirectoryState: Dispatch<SetStateAction<IDirectoryState>>
}

export interface IDirectoryContextProvider {
	children: React.ReactNode
}
export interface IDirectoryState {
	range: Array<number>;
	page: number;
	employeeList: Array<Employee>;
	errorModal: boolean;
}

export const defaultState: IDirectoryState = {
	range: [0, 0],
	page: 1,
	employeeList: [],
	errorModal: false,
};

export const defaultContext: IDirectoryContext = {
	directoryState: defaultState,
	setDirectoryState: ()=>{}
}

