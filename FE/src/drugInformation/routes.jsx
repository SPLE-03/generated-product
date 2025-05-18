/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';

import DrugInformationPage from './containers/DrugInformationPage'
import CreateDrugInformationPage from './containers/CreateDrugInformationPage'

const drugInformationRoutes = [
	{ 
		path: "/druginformation",
		element: <DrugInformationPage />,
	},
	{ 
		path: "/druginformation/create",
		element: <CreateDrugInformationPage />,
	}
]

export default drugInformationRoutes
