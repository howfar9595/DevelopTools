import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Tree from '../Elements/Tree/Tree';
import Tabs from '../Elements/Tabs/Tabs';


const styles = require("./TreeLayout.scss");

export default class TreeLayout extends React.Component {
    state = {
        value: 0,
    };

    render() {
        const { value } = this.state;
        return (
            <Grid container className={styles.container}>
                <Grid className={styles.gridTree} >
                    <Tree />
                </Grid>
                <Grid className={styles.rightContent}>
                    <Grid item xs={12}>
                        <Tabs></Tabs>
                    </Grid>
                    <Grid></Grid>
                </Grid>
            </Grid>

        );
    }
}