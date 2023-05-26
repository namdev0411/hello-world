"use client";
import SigninBtn from "@/components/SigninBtn";
import SignoutBtn from "@/components/SignoutBtn";
import useCurrentUser from "@/hooks/useCurrentUser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

export default function App() {
  const currentUser = useCurrentUser();

  return (
    <>
      <AuthenticatedTemplate>
        <main className="flex flex-col items-center justify-between p-24">
          <h1 className="text-4xl">Hello world</h1>
          <div>
            <ul>
              <li>Email: {currentUser?.email}</li>
              <li>FamilyName: {currentUser?.familyName}</li>
              <li>GivenName: {currentUser?.givenName}</li>
              <li>Sub: {currentUser?.sub}</li>
            </ul>
          </div>
          <SignoutBtn />
        </main>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SigninBtn />
      </UnauthenticatedTemplate>
    </>
  );
}
