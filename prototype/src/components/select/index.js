import React, { Component } from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'clean' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical>
        <Menu.Item name='clean' active={activeItem === 'clean'} onClick={this.handleItemClick} />
        <p><Icon name='world' size='big' />Steer clear of those pollution hotspots</p>
				<Menu.Item name='lean' active={activeItem === 'lean'} onClick={this.handleItemClick} />
        <p><Icon name='heartbeat' size='big' />Maximise your step count </p>
				<Menu.Item name='green' active={activeItem === 'green'} onClick={this.handleItemClick} />
        <p><Icon name='leaf' size='big' />Get amongst London's parks and fields </p>
      </Menu>
    )
  }
}
