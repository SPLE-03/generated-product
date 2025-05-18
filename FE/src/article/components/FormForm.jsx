/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
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
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormForm = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form" 
		  onSubmit={handleSubmit()}
	
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
		            label="Simple Field"
		            placeholder="Masukkan simple field"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
	    ]}
	  />
	    
	</div>
  )
}

export default FormForm
