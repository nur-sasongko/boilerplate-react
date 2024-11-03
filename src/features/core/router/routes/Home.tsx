import MainLayout from "@/features/core/components/layouts/MainLayout";
import HomePage from "@/features/home/pages/HomePage";
import Basic from "@/features/zustand-demo/pages/Basic";
import { RouteObject } from "react-router-dom";

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
      },
    ],
  },
];

export default router;
