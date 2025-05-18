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
import DoctorInformationCard from "../components/DoctorInformationCard";

import getDoctorInformation from '../services/getDoctorInformation'
const DoctorInformationPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listDoctorInformation: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [doctorInformation, setDoctorInformation] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listDoctorInformation: true}))
				const { data: doctorInformation } = await getDoctorInformation()
				setDoctorInformation(doctorInformation.data)
			} finally {
				setIsLoading(prev => ({...prev, listDoctorInformation: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("DoctorInformation Page")
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
	title={"List DoctorInformation"}
	singularName={"DoctorInformation"}
	items={[doctorInformation]}
	isLoading={isLoading.listDoctorInformation}
>
	<DoctorInformationCard
		doctorInformation={doctorInformation}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DoctorInformationPage

