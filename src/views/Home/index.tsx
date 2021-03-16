import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';
import Menu from '../../components/Menu';

const MyHome = () => {
  return (
    <Background color="purple">
      <Card>
        <h1>Hi I'm home, where is your home?</h1>
        <Input />
        <Input />
        <Button>Add</Button>
      </Card>
      <Menu />
    </Background>
  );
};

export default MyHome;
