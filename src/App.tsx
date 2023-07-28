import { useEffect } from 'react';
import './App.css';
import { Stack } from '@mui/material';
import Header from './components/Header/Header';
import Directory from './components/Directory/Directory';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Stack
			direction="column"
			display="flex"
			height="100%"
			overflow="hidden"
			sx={{ backgroundColor: '#f2f2f2' }}
		>
			<Header />
			<Directory />
			<Footer />
		</Stack>
	);
}

export default App;
