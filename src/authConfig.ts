import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "2519ea76-e57d-4add-9950-a55cd2bbb0c6",
    authority: "https://furuteam.b2clogin.com/furuTeam.onmicrosoft.com/B2C_1_signin", 
    knownAuthorities: ["https://furuteam.b2clogin.com"],
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },  
  cache: {
    cacheLocation: "localStorage",
  },
};

export const loginRequest = {
  scopes: ["openid", "offline_access"],
};
