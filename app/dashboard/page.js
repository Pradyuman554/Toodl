import Dashboard from "../../components/Dashboard";
import Login from './../../components/Login';
import Loading from '@/components/Loading';
import Main from '@/components/Main';

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