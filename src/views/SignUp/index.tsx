import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';

const SignUp = () => {
  return (
    <Background color="#CFD6E8">
      <Card>
        <h1>SignUp or Leave</h1>
        <Input placeholder="Username or Email" />
        <Input placeholder="Password" type="password" />
        <Button>OK</Button>
      </Card>
    </Background>
  );
};

export default SignUp;
