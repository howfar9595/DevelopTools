import * as React from 'react';
const styles = require("./Tabs.scss");



export default class Tabs extends React.Component {
    state = {}

    render() {
        const { } = this.state;

        return (
            <div className={styles.tabs}>
                <div className={styles.tab}>
                    <div className={styles.tabLabel}>
                        <label>Tabs.tsx </label>
                    </div>
                    <div>X</div>
                </div>
                <div className={styles.tab}>
                    <div className={styles.tabLabel}>
                        <label>Tabs2321331.tsx </label>
                    </div>
                    <div>X</div>
                </div>
            </div>
        );
    }
}