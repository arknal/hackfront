import { Tabs, Tab } from 'react-bootstrap';
import PartnerRegisterForm from './registerForms/PartnerRegisterForm';
import UniEmpRegisterForm from './registerForms/UniEmpRegisterForm';


function Register({onRegister, ...props}) {
  return (
    <div className='login'>
      <Tabs
        id="controlled-login-tab"
        defaultActiveKey={'partner'}
        className="login__tabs"
      >
        <Tab eventKey="partner" title="Для партнеров">
          <PartnerRegisterForm onLogin={ props.onLogin } />
        </Tab>
        <Tab eventKey="uniemployee" title="Для сотрудников">
          <UniEmpRegisterForm onLogin={ props.onLogin } />
        </Tab>
        <Tab eventKey="student" title="Для студентов" disabled>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Register;
