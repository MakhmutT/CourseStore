import { AdvantagesDataProps } from "./AdvantagesData.props";
import styles from "./AdvantagesData.module.css";
import CheckIcon from "./check.svg";

export const AdvantagesData = ({ advantages }: AdvantagesDataProps): JSX.Element => {

	return (
		<>
			{advantages.map((adv) => {
				return (
					<div className={styles.advantage} key={adv._id}>
						<div className={styles.checkIcon}>
							<CheckIcon />
						</div>
						<h4>{adv.title}</h4>
						{adv.description
							&& <>
								<hr className={styles.vLine}></hr>
								<div className={styles.description}>{adv.description}</div>
							</>
						}
					</div>
				);
			})}
		</>
	);
};
