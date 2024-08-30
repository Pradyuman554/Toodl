import Dashboard from "../../components/Dashboard";
import Loading from '../../components/Loading'
import Main from '../../components/Main';
import Login from '../../components/Login';

export const metadata = {
  title: "Toodle | DashBoard",
};

export default function DashboardPage() {
  return (
    <Main>
      <Dashboard/>
    </Main>
  )
}