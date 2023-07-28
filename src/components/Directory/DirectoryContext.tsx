import React, { createContext, useState } from 'react';
import {
	defaultContext,
	defaultState,
	IDirectoryContext,
	IDirectoryContextProvider,
	IDirectoryState,
} from '../../models/Models';

export const DirectoryContext =
	createContext<IDirectoryContext>(defaultContext);

export const DirectoryProvider = ({
	children,
}: IDirectoryContextProvider) => {
	const [directoryState, setDirectoryState] =
		useState<IDirectoryState>(defaultState);

	return (
		<DirectoryContext.Provider
			value={{ directoryState, setDirectoryState }}
		>
			{children}
		</DirectoryContext.Provider>
	);
};
