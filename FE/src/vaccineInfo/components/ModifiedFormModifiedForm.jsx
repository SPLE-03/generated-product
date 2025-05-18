/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveVaccineInfo from '../services/saveVaccineInfo'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormModifiedForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const createVaccineInfo = (data) => {
    const cleanData = cleanFormData(data)
    saveVaccineInfo({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save VaccineInfo berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Modified Form" 
		  onSubmit={handleSubmit(createVaccineInfo)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="informationTitle"
		        name="informationTitle"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="informationTitle"
		            placeholder="Masukkan informationtitle"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="slot"
		        name="slot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="informationDescription"
		            placeholder="Masukkan informationdescription"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="vaccinationLocation"
		        name="vaccinationLocation"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="vaccinationLocation"
		            placeholder="Masukkan vaccinationlocation"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="type"
		        name="type"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="type"
		            placeholder="Masukkan type"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="schedule"
		        name="schedule"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="schedule"
		            placeholder="Masukkan schedule"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Create VaccineInfo" type="submit" variant="primary">Create VaccineInfo</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormModifiedForm
