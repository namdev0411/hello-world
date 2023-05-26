import { useMsal } from "@azure/msal-react";

export default function SigninBtn(): JSX.Element {
  const { instance } = useMsal();
  return (
    <div>
      <button onClick={() => instance.logout()}>ログアウト</button>
    </div>
  );
}
