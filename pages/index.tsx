import type { GetStaticProps } from 'next';
import { Button, Htag, P, Rating, Tag } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from "axios";
import { MenuItem } from '../interfaces/menu.interface';

const Home = ({ menu }: HomeProps) => {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}