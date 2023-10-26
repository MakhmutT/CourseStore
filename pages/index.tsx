import type { NextPage } from 'next';
import { Button, Htag, P, Tag } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h3'>Text</Htag>
      <Button appearance='primary' arrow="down">Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
      <P size="S">Маленький</P>
      <P>Средний</P>
      <P size="L">Большой</P>
      <Tag size="S">Ghost</Tag>
      <Tag size="M" color="red">Red</Tag>
      <Tag size="S" color="green">green</Tag>
      <Tag color="primary">primary</Tag>
    </>
  );
};

export default Home;
