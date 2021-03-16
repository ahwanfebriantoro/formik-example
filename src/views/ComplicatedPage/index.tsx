import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';
import Menu from '../../components/Menu';

const ComplicatedPage = () => {
  return (
    <Background color="purple">
      <Card>
        <h1>Hmmm</h1>
        <Input />
        <Input />
        <Button>Add</Button>
      </Card>
      <Menu />
    </Background>
  );
};

export default ComplicatedPage;
