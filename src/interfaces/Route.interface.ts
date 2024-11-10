interface route {
  path: string;
  Component: React.FC;
}

interface routeWrap {
  [key: string]: route;
}
