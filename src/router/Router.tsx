/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter } from "react-router-dom";

// autoload routes
const modules = import.meta.glob("./routes/*.tsx", { eager: true });

const routes = Object.entries(modules).map((fileModule: any) => {
  return fileModule[1].default[0];
});

export const router = createBrowserRouter(routes);

export default router;
