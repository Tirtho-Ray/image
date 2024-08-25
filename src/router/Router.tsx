import { createBrowserRouter } from "react-router-dom";
import MainUi from "../mainUi/MainUi";
import Home from "../page/home/Home";
import OurFeature from "../navbar/AllDropDownNavber/OurCollage/Our-feature";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainUi />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/ourFeature',
                element:<OurFeature />
            },
            {
                path:'/about',
                element:<OurFeature />
            },
        ]
    }
])
export default router;