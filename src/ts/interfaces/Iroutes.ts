type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: JSXComponent;
  name: string;
}
