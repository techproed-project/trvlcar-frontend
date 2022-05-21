import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getUser } from "./api/user-service";
import LoadingPage from "./pages/users/LoadingPage";
import CustomRoutes from "./router/custom-routes";
import { useStore } from "./store";
import { loginSuccess } from "./store/user/userActions";

const App = () => {
  const [loading, setLoading] = useState(true);
  const {dispatchUser} = useStore();

  const loadData = async () =>  { 
    try {
      const resp = await getUser();
      dispatchUser(loginSuccess(resp.data));
      setLoading(false);
      
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  

  if(loading) 
    return(<LoadingPage/>)
  else
  return (
    <>
      <CustomRoutes/>
      <ToastContainer />
    </>
  );
}

export default App;
