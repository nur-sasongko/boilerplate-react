import MainLayout from "@/components/templates/MainLayout";
import HomePage from "@/components/pages/HomePage";
import { RouteObject } from "react-router-dom";
import Basic from "@/components/pages/zustand-demo/Basic";

const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "zustand",
        element: <Basic />,
      }
    ],
  },
];

export default router;
