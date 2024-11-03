import MainLayout from "@/features/core/components/layouts/MainLayout";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "/settings",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <p>Ini halaman setting</p>,
      },
      {
        path: "profile",
        element: <p>Ini halaman profile</p>,
      },
      {
        path: "account",
        element: <p>Ini halaman account</p>,
      },
    ],
  },
];

export default router;
