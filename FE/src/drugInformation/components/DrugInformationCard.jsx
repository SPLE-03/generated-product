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

const DrugInformationCard = ({ drugInformation,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[drugInformation]}
  	
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
            id: "dosage",
            condition: "",
            label: "dosage",
  		  featureName: "dosage",
            editable: false
          }
  ]}
      itemsEvents={(drugInformationItem) => [
  	]}
    />
  )	
};

export default DrugInformationCard;
