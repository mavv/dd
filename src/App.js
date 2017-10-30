// @flow weak

import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Behance from './components/Behance'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
});

export default class App extends Component {
  render() {
    return (
      <div>

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Deedee's bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Behance />
      </div>
    )
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <BehanceItem/>
    // </div>
  }
}
