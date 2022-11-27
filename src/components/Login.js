import { Tabs, Tab } from 'react-bootstrap';
import PartnerLoginForm from "./loginForms/PartnerLoginForm";
import UniEmpLoginForm from "./loginForms/UniEmpLoginForm";

function Login(props) {

  return (
    <div className='login'>
      <Tabs
        id="controlled-login-tab"
        defaultActiveKey={'partner'}
        className="login__tabs"
      >
        <Tab eventKey="partner" title="Для партнеров">
          <PartnerLoginForm onLogin={ props.onLogin } />
        </Tab>
        <Tab eventKey="uniemployee" title="Для сотрудников">
          <UniEmpLoginForm onLogin={ props.onLogin } />
        </Tab>
        <Tab eventKey="student" title="Для студентов" disabled>
        </Tab>
        </Tabs>
    </div>
  );
}

export default Login;
