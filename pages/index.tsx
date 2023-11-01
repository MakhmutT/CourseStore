import type { NextPage } from 'next';
import { Button, Htag, P, Rating, Tag } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h3'>asd</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
      <P size="S">Маленький</P>
      <P>Средний</P>
      <P size="L">Большой</P>
      <Tag size="S">Ghost</Tag>
      <Tag size="M" color="red">Red</Tag>
      <Tag size="S" color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
