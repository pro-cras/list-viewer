import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const AppHeader: React.FC = () => {
  const [isActive, setActive] = useState(true);

  return (
    <header
      className={classNames(styles.AppHeader, { [styles.active]: isActive })}
    >
      <div className={styles.dynamicPositioner} />
      <input
        type="text"
        className={styles.input}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        autoFocus={true}
      />
      <div className={styles.positioner} />
    </header>
  );
};
