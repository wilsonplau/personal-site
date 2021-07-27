import React from "react";
import Link from "next/link";

import styles from "../styles/Header.module.scss";

const Header: React.FC<{}> = () => (
	<header className={styles.header}>
		<div className={styles.header__container}>
			<div className={styles.header__left}>
				<div className={styles.header__logo} />
				<div className={styles.header__title}>
					Hello.
					<br />
					My name is Wilson.
				</div>
			</div>
			<div className={styles.header__right}>
				<Link href="/">I build</Link>
				<Link href="/write">I write</Link>
				<Link href="/am">I am</Link>
			</div>
		</div>
	</header>
);

export default Header;
