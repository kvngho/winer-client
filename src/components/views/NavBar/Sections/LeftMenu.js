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
    <Menu.Item key="map">
      <a href="/map">Map</a>
    </Menu.Item>
    <Menu.Item key="survey">
      <a href="/survey">Survey</a>
    </Menu.Item>
    <SubMenu title={<span>Wines</span>}>
      <MenuItemGroup title="By winer">
        <Menu.Item key="setting:1"><a href="/wine1">Chateau Ste Michelle Brut(N/V)</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/wine2">BROQUEL TORRONTES</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/wine3">Matua Marlborough Pinot Noir</a></Menu.Item>
        <Menu.Item key="setting:4"><a href="/wine4">M.Chapoutier Cotes du Rhone Rouge</a></Menu.Item>
        <Menu.Item key="setting:5"><a href="/wine5">Yali, Premium Release Unoaked Chardonnay</a></Menu.Item>
        <Menu.Item key="setting:6"><a href="/wine6">Columbia Crest Grand Estate Chardonnay</a></Menu.Item>
        <Menu.Item key="setting:7"><a href="/wine7">Prologo Reserva Merlot</a></Menu.Item>
        <Menu.Item key="setting:8"><a href="/wine8">Tommasi Graticcio Appassionato Rosso</a></Menu.Item>
        <Menu.Item key="setting:9"><a href="/wine9">9 Lives Reserve Carmenere</a></Menu.Item>
        <Menu.Item key="setting:10"><a href="/wine10">9 Lives Reserve Cabernet Sauvignon</a></Menu.Item>
        <Menu.Item key="setting:11"><a href="/wine11">PAZ Malbec</a></Menu.Item>
        <Menu.Item key="setting:12"><a href="/wine12">Brown Brothers Ten Acres Shiraz</a></Menu.Item>
      </MenuItemGroup>
      {/* <MenuItemGroup title="Red">
        <Menu.Item key="setting:3">Merlot</Menu.Item>
        <Menu.Item key="setting:4">Malbec</Menu.Item>
      </MenuItemGroup> */}
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu