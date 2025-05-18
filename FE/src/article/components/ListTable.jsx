/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const ListTable = ({ modifiedDataBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[modifiedDataBinding]}
  	  itemsAttrs={[
          {
            id: "content",
            condition: "",
            label: "content",
  		  featureName: "content",
            editable:  false 
          }
  ]}
  	/>
  </>
  )
};

export default ListTable;
