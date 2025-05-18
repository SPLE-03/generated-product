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
import ArticleCard from "../components/ArticleCard";

import getArticle from '../services/getArticle'
const ArticlePage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listArticle: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [article, setArticle] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listArticle: true}))
				const { data: article } = await getArticle()
				setArticle(article.data)
			} finally {
				setIsLoading(prev => ({...prev, listArticle: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Article Page")
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
	title={"List Article"}
	singularName={"Article"}
	items={[article]}
	isLoading={isLoading.listArticle}
>
	<ArticleCard
		article={article}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ArticlePage

