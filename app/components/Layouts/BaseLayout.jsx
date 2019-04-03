import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = require('./BaseLayout.scss');

export default class BaseLayout extends React.Component {

  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    const { Component, rest, theme, rest: { match: { path } } } = this.props;
    
    return (
      <Grid className={styles.root}>
        <Grid item xs={12} className={styles.titlebar}>
          <div className={styles.windowAppicon} />
        </Grid>
        <Grid
          container
        >
          <Grid className={styles.activitybar}></Grid>
          <Grid item xs className={styles.content}>
            <Component {...rest} />
          </Grid>
        </Grid>
        <Grid item xs={12} className={styles.statusbar}></Grid>
      </Grid>
    );

  }
}
