import * as ReactRouter from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

function getCrumbPaths(path) {
  const splitPath = path.split("/").filter((item) => item !== "");
  const crumbPaths = [];

  for (let index = 0; index < splitPath.length; index++) {
    const crumbPath = splitPath.slice(0, index + 1).join("/");
    crumbPaths.push(["", crumbPath].join("/"));
  }

  return crumbPaths;
}

function getLastArrayItem(array) {
  const length = array.length - 1;
  return array[length];
}

export function BreadcrumbsRouter() {
  const location = ReactRouter.useLocation();
  const crumbPaths = getCrumbPaths(location.pathname);

  const renderBreadcrumbs =
    crumbPaths.length > 1
      ? crumbPaths.map((path) => (
          <Breadcrumbs.Crumb to={path}>
            {getLastArrayItem(path.split("/"))}
          </Breadcrumbs.Crumb>
        ))
      : null;

  return <Breadcrumbs>{renderBreadcrumbs}</Breadcrumbs>;
}
