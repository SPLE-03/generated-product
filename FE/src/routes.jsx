import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import articleRoutes from "@/article/routes";
import doctorInformationRoutes from "@/doctorInformation/routes";
import vaccineInfoRoutes from "@/vaccineInfo/routes";
import drugInformationRoutes from "@/drugInformation/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...articleRoutes, 
	...doctorInformationRoutes, 
	...vaccineInfoRoutes, 
	...drugInformationRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
