import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Wines</span>}>
      <MenuItemGroup title="White">
        <Menu.Item key="setting:1">Chardonnay</Menu.Item>
        <Menu.Item key="setting:2">Semillon</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Red">
        <Menu.Item key="setting:3">Merlot</Menu.Item>
        <Menu.Item key="setting:4">Malbec</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu