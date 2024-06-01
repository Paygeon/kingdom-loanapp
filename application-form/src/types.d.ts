declare module 'react-router-dom' {
  import { ComponentType } from 'react';
  
  interface SwitchProps {}
  interface BrowserRouterProps {}

  export const Switch: ComponentType<SwitchProps>;
  export const BrowserRouter: ComponentType<BrowserRouterProps>;
  
  // Add declaration for Route
  interface RouteProps {}

  export const Route: ComponentType<RouteProps>;
}