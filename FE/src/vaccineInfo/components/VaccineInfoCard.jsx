/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const VaccineInfoCard = ({ vaccineInfo,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[vaccineInfo]}
  	
  	itemsAttrs={[
          {
            id: "informationTitle",
            condition: "",
            label: "informationTitle",
  		  featureName: "informationTitle",
            editable: false
          }
  ,
          {
            id: "informationDescription",
            condition: "",
            label: "informationDescription",
  		  featureName: "consultationDescription",
            editable: false
          }
  ,
          {
            id: "vaccinationLocation",
            condition: "",
            label: "vaccinationLocation",
  		  featureName: "vaccinationLocation",
            editable: false
          }
  ,
          {
            id: "type",
            condition: "",
            label: "type",
  		  featureName: "type",
            editable: false
          }
  ,
          {
            id: "schedule",
            condition: "",
            label: "schedule",
  		  featureName: "schedule",
            editable: false
          }
  ]}
      itemsEvents={(vaccineInfoItem) => [
  	]}
    />
  )	
};

export default VaccineInfoCard;
