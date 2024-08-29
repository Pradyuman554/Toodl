import Main from "../../components/Main";
import Dashboard from "../../components/Dashboard";
import Login from './../../components/Login';

export const metadata = {
  title: "Toodle | DashBoard",
};

export default function DashboardPage() {
  const isAuthenticated = false;
  let children = (
    <Login/>
  );

  if(isAuthenticated){
    children = (
        <Dashboard/>
    );
  }

  return <Main className="">
    {children}
  </Main>;
}
