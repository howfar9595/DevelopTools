import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Tree from '../Elements/Tree/Tree'

const styles = require("./TreeLayout.scss");

export default class TreeLayout extends React.Component{
    render() {
        return (
            <Grid className={styles.gridTree}>
                 <Tree />
            </Grid>
           
        );
    }
}