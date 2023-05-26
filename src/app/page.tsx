"use client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig";
import App from "./App";

export default function Home() {
  const pca = new PublicClientApplication(msalConfig);

  return (
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  );
}
