import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { HhData, Htag, Tag, AdvantagesData, P, Sort, Product } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && <Tag color="gray" size="M">{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortProducts && sortProducts.map(p => (<Product key={p._id} product={p} />))}
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh
				&&
				<>
					<div className={styles.hhTitle}>
						<Htag tag="h2">Вакансии - {page.category}</Htag>
						<Tag color="red" size="M">hh.ru</Tag>
					</div>
					<HhData {...page.hh} />
				</>
			}
			{page.advantages && page.advantages.length > 0 &&
				<>
					<Htag tag="h2">Преимущества</Htag>
					<AdvantagesData advantages={page.advantages} />
				</>
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map(tag => <Tag key={tag} color={'primary'} className={styles.tag}>{tag}</Tag>)}
		</>
	);
};
