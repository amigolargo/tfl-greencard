import React, { Component } from 'react'
import Link from 'gatsby-link'
import Select from '../components/select'
import { Button, Input, Divider } from 'semantic-ui-react'
import styles from "./select.module.css"
import { navigateTo } from "gatsby-link"


export default class SelectPage extends Component {

  state = {
    textEntry: "",
    loading: false,
  }

  onSubmitDestination = (e) => {
    e.preventDefault()
    this.setState(() => ({ loading: true }))

    setTimeout(() => {
      navigateTo('/routes')
    }, 2000)
  }

  handleTextChange = (e, { value }) => {
    this.setState(() => ({ textEntry: value }))
  }

  render({ transition } = this.props) {
    return (
      <div className={styles.root} style={transition && transition.style}>
        <h1 className={styles.h1}>Green Card</h1>
        <h2 className={styles.h2}>Optimise your route, <br /> travel:</h2>
        <div className={styles.selectList}>
          <Select  />
        </div>
        <Divider hidden />
        <form onSubmit={this.onSubmitDestination}>
          <Input onChange={this.handleTextChange} loading={this.state.loading} icon='search' placeholder='Enter your destination...' />
        </form>
        <Button
          onClick={this.onSubmitDestination}
          disabled={this.state.textEntry.length < 10}
          >Go
        </Button>
      </div>
    )
  }
}
