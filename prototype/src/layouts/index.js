import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './semantic.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="TFL Green Card: reclaim Your City"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no'},
        { name: 'apple-mobile-web-app-capable', content: 'yes'},
        { name: 'apple-touch-icon', sizes: '144x144', content: 'apple-icon-144x144.png'},
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
