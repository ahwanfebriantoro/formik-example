import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';
import Menu from '../../components/Menu';

const SignUp = () => {
  return (
    <Background color="purple">
      <Card>
        <h1>SignUp or Leave</h1>
        <Input placeholder="Username or Email" />
        <Input placeholder="Password" type="password" />
        <Button>OK</Button>
      </Card>
      <Menu />
    </Background>
  );
};

export default SignUp;
