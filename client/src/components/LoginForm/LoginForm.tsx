import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTypes";
import { useEffect } from "react";
import { login, reset } from "../../redux/features/auth/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleLogin = async (
    googleData: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    let result;
    if ("profileObj" in googleData) {
      result = googleData.profileObj;
      dispatch(login(result));
    }
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="border flex flex-col items-center justify-center border-red-600 rounded-md p-20 shadow-lg">
        <h1 className="font-title text-6xl my-6">Please log in to access</h1>
        <GoogleLogin
          clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
          buttonText="Login with Google"
          onSuccess={handleLogin}
          onFailure={(res) => {
            alert(res);
          }}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    </div>
  );
};

export default LoginForm;
