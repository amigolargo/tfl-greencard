import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Menu } from 'semantic-ui-react'
import styles from './modes.module.css'
import img02 from '../../img/2-01.png'

class Modes extends Component {
  state = {
    activeItem: `green`,
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.handleItemClick(name)
  }

  render({ handleItemClick } = this.props) {
    const { activeItem } = this.state

    return (
      <div>
        <Divider hidden />
        <div className={styles.tabContainer}>
          <Menu color={`green`} inverted>
            <Menu.Item
              name='green'
              active={activeItem === 'green'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='clean'
              active={activeItem === 'clean'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='lean'
              active={activeItem === 'lean'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      </div>
    )
  }
}

export default Modes
