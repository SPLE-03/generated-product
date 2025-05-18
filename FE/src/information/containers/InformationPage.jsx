/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import InformationCard from "../components/InformationCard";

import getInformation from '../services/getInformation'
const InformationPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listInformation: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [information, setInformation] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listInformation: true}))
				const { data: information } = await getInformation()
				setInformation(information.data)
			} finally {
				setIsLoading(prev => ({...prev, listInformation: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Information Page")
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
	title={"List Information"}
	singularName={"Information"}
	items={[information]}
	isLoading={isLoading.listInformation}
>
	<InformationCard
		information={information}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default InformationPage

