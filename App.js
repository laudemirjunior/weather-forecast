import * as React from "react";
import Routes from "./src/routes";
import { Providers } from "./src/providers";

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
