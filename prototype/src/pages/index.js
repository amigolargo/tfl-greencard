import React from "react"
import { navigateTo } from "gatsby-link"
import { Button } from 'semantic-ui-react'
import styles from "./index.module.css"

export default ({ transition }) => (
  <div className={styles.root} style={transition && transition.style}>
    <header className={styles.header}>
      <h1 className={styles.h1}>Green Card</h1>
      <h2 className={styles.h2}>Keeping London Active</h2>
    </header>
    <button
      onClick={() => navigateTo('/routes')}
      className={styles.tapIn}
    ></button>
  <h3 className={styles.tapInHeader}>Tap in</h3>
  <p className={styles.discover}>Or
      <Button
        content={`Discover routes`}
        onClick={() => navigateTo('/select')}
      />
    </p>
  </div>
);
