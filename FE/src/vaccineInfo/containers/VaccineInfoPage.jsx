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
import VaccineInfoCard from "../components/VaccineInfoCard";

import getVaccineInfo from '../services/getVaccineInfo'
const VaccineInfoPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listVaccineInfo: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [vaccineInfo, setVaccineInfo] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listVaccineInfo: true}))
				const { data: vaccineInfo } = await getVaccineInfo()
				setVaccineInfo(vaccineInfo.data)
			} finally {
				setIsLoading(prev => ({...prev, listVaccineInfo: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("VaccineInfo Page")
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
	title={"List VaccineInfo"}
	singularName={"VaccineInfo"}
	items={[vaccineInfo]}
	isLoading={isLoading.listVaccineInfo}
>
	<VaccineInfoCard
		vaccineInfo={vaccineInfo}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default VaccineInfoPage

