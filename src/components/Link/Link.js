import * as ReactRouter from "react-router-dom";
import * as ThemeUI from "theme-ui";

export function Link(props) {
  return (
    <ThemeUI.Link as={ReactRouter.Link} {...props}>
      {props.children}
    </ThemeUI.Link>
  );
}
