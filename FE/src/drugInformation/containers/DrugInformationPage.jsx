/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DrugInformationCard from "../components/DrugInformationCard";

import getDrugInformation from '../services/getDrugInformation'
const DrugInformationPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listDrugInformation: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [drugInformation, setDrugInformation] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listDrugInformation: true}))
				const { data: drugInformation } = await getDrugInformation()
				setDrugInformation(drugInformation.data)
			} finally {
				setIsLoading(prev => ({...prev, listDrugInformation: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("DrugInformation Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List DrugInformation"}
	singularName={"DrugInformation"}
	items={[drugInformation]}
	isLoading={isLoading.listDrugInformation}
>
	<DrugInformationCard
		drugInformation={drugInformation}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DrugInformationPage

