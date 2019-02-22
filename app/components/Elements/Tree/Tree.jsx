import * as React from 'react'
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';

import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from "classnames"
import Tree from 'antd/lib/tree';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = require("./Tree.scss");

const { TreeNode } = Tree;

const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    {
      title: '0-1-0-0', key: '0-1-0-0', children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
        { title: '0-0-0-1', key: '0-0-0-1' },
        { title: '0-0-0-2', key: '0-0-0-2' },
      ]
    },
    {
      title: '0-1-0-1', key: '0-1-0-1', children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
        { title: '0-0-0-1', key: '0-0-0-1' },
        { title: '0-0-0-2', key: '0-0-0-2' },
      ]
    },
    {
      title: '0-1-0-2', key: '0-1-0-2', children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
        { title: '0-0-0-1', key: '0-0-0-1' },
        {
          title: '0-0-0-2', key: '0-0-0-2', children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ]
        },
      ]
    },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

const DirectoryTree = Tree.DirectoryTree;

export default class ReactTree extends React.Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
    anchorEl: null,
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    window.localStorage.setItem('notes', '1211');
    console.log('object', window.localStorage.getItem('notes'))
    this.setState({ selectedKeys });
  }

  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  })

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;

    return (
      <div className={styles.treeParent}>
        <div className={styles.buttons}>
          <IconButton size="small" className={styles.btnAdd}
           aria-owns={anchorEl ? 'simple-menu' : undefined}
           aria-haspopup="true"
           onClick={this.handleClick}
          >
            <span className={styles.conn} />
          </IconButton>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>SQL Server</MenuItem>
          <MenuItem onClick={this.handleClose}>Mysql</MenuItem>
          <MenuItem onClick={this.handleClose}>Oracel</MenuItem>
        </Menu>
        </div>
        <Divider />
        <DirectoryTree
          multiple
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          selectedKeys={this.state.selectedKeys}
          className={styles.tree}
        >
          {this.renderTreeNodes(treeData)}
        </DirectoryTree>
        <Divider />
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon className={classNames('fa fa-search')} />
            </InputAdornment>
          }
        />
      </div>
    );
  }
}