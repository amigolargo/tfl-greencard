import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import styles from './tabs.module.css'
import img01 from '../../img/1-01.png'
import img02 from '../../img/2-01.png'
import img03 from '../../img/3-01.png'
import img04 from '../../img/4-01.png'
import img05 from '../../img/5-01.png'

class Tabs extends Component {
  state = {
    zoom: false,
  }
  render({ zoomImg } = this.props) {
    const panes = [
      { menuItem: 'Easy', render: () => <Tab.Pane attached={'bottom'}><img className={styles.paneImage} src={img01} /></Tab.Pane>},
      { menuItem: 'Medium', render: () => <Tab.Pane attached={'bottom'}><img className={styles.paneImage} src={img02} /></Tab.Pane> },
      { menuItem: 'Hard', render: () => <Tab.Pane attached={'bottom'}><img className={styles.paneImage} src={img03} /></Tab.Pane> },
      { menuItem: 'Harder', render: () => <Tab.Pane attached={'bottom'}><img className={styles.paneImage} src={img04} /></Tab.Pane> },
      { menuItem: 'Eco', render: () => (
        <Tab.Pane attached={'bottom'}>
          {!this.state.zoom &&
            <img onClick={() => this.setState(() => ({ zoom: true }))} className={styles.paneImage} src={img05} />
          }
          {this.state.zoom &&
            <img onClick={() => this.setState(() => ({ zoom: false }))} className={styles.paneImage} src={zoomImg} />
          }
        </Tab.Pane>
      )},
    ]
    return (
      <div>
        <Divider hidden />
        <div className={styles.tabContainer}>
          <Tab
            menu={{ color: 'green', inverted: true, tabular: false, attached: 'bottom' }}
            panes={panes}
          />
        </div>
      </div>
    )
  }
}

export default Tabs
