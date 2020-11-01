import * as React from "react";
import cs from "classnames";
import {
    Navbar,
    Button,
    Icon,
    InputGroup,
    Classes as BpClasses,
} from "@blueprintjs/core";
import styles from "./Heading.module.scss";

interface IHeadingProps {}

const Heading: React.FC<IHeadingProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={cs(styles.logo, BpClasses.SKELETON)} />
            </div>
            <div className={styles.topNavbarContainer}>
                <Navbar className={styles.topNavbar}>
                    <Button text="Про проект" icon="info-sign" minimal />
                    <Button text="Тренування" icon="learning" minimal />
                    <Button text="Історія змін" icon="history" minimal />
                    <Button text="Мій дім" icon="home" minimal />
                </Navbar>
            </div>
            <div className={styles.userContainer}>
                <Button
                    className={cs(styles.user, BpClasses.SKELETON)}
                    minimal
                />
            </div>
            <div className={styles.sectionsNavbarContainer}>
                <Navbar className={styles.sectionsNavbar}>
                    <Button
                        text="Процес об'єкт продукт рішення"
                        icon={<Icon icon="grouped-bar-chart" iconSize={40} />}
                        minimal
                    />
                </Navbar>
            </div>
            <div className={styles.searchContainer}>
                <InputGroup
                    placeholder="Пошук"
                    rightElement={<Button icon="search" minimal />}
                    className={styles.searchInput}
                />
            </div>
        </div>
    );
};

export { Heading };
