import {
    createBrowserRouter,
} from "react-router-dom";
import { BestSellers } from "../components/Bestseller/Bestseller";
import { Products } from "../components/Bestseller/Product/Product";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers />,
        errorElement: <ErrorPage />,
    },
    {
        path: "product/:productId",
        element: <Products />,
    },
]);