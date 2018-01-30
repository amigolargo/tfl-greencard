import React, { Component } from 'react'
import Link from 'gatsby-link'
import Tabs from '../components/tabs'
import Modes from '../components/modes'
import { Button, Input, Divider } from 'semantic-ui-react'
import styles from "./routes.module.css"
import { navigateTo } from "gatsby-link"

import zoom01 from '../img/Z1-01.png'
import zoom02 from '../img/Z2-01.png'
import zoom03 from '../img/Z3-01.png'


export default class Routes extends Component {

  state = {
    zoomImg: zoom03,
  }

  onChangeMode = (name) => {
    const zoomImg = name == `clean` ? zoom01 : name === `green` ? zoom03 : name === `lean` ? zoom02 : null
    this.setState({ zoomImg })
  }

  render({ transition } = this.props) {
    return (
      <div className={styles.root} style={transition && transition.style}>
        <h1 className={styles.h1}>Green Card</h1>
        <h2 className={styles.h2}>Plan your route</h2>
        <Button
          content='Back'
          icon='left arrow'
          labelPosition='left'
          onClick={() => navigateTo(`/`)}
        />
        <Tabs zoomImg={this.state.zoomImg} />
        <h4 className={styles.h4}>Optimised for</h4>
        <Modes handleItemClick={this.onChangeMode} />
        <button
          onClick={() => navigateTo(`/`)}
          className={styles.tapOut}
        >Tap Out
        </button>
      </div>
    )
  }
}
