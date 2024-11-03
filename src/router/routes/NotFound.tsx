import NotFound from "@/components/pages/not-found/NotFound";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
