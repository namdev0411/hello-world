import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

export default function SigninBtn() {
  const { instance } = useMsal();
  return (
    <div>
      <button
        className="
          bg-blue-500  
          text-white 
          font-bold 
          py-2 
          px-4 
          rounded
          text-[#fff]
        "
        onClick={() => instance.loginRedirect(loginRequest)}
      >
        ログイン
      </button>
    </div>
  );
}
