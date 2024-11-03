import NotFound from "@/features/not-found/pages/NotFound";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
