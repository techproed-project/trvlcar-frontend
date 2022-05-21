import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { getUser } from "./api/user-service";
import CustomRoutes from "./router/custom-routes";
import { StoreProvider, useStore } from "./store";
import { loginSuccess } from "./store/user/userActions";

const App = () => {
  const {dispatchUser} = useStore();

  const loadData = async () =>  { 
    try {
      const resp = await getUser();
      dispatchUser(loginSuccess(resp.data));
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  

 

  return (
    <>
      <CustomRoutes/>
      <ToastContainer />
    </>
  );
}

export default App;
