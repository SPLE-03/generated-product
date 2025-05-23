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
import { useSearchParams } from "react-router";
import ModifiedFormModifiedForm from '../components/ModifiedFormModifiedForm'
const CreateVaccineInfoPage = props => {
const [isLoading, setIsLoading] = useState({
	modifiedForm: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Create VaccineInfo Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Form"}
		
	>
		<ModifiedFormModifiedForm
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateVaccineInfoPage

