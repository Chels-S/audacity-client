import React from 'react';
import { Menu } from 'antd';
import {DownOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
// import './Nav.css';
import goobbueLogo from '../../assets/goobbueLogo.png';

// import Raids from '../raids/Raids';
// import Trials from '../trials/Trials';
// import Umbra from '../raids/shadowbringers/Umbra'
// import Litany from '../raids/shadowbringers/Litany'
// import Anamorphosis from '../raids/shadowbringers/Anamorphosis';
// import Eternity from '../raids/shadowbringers/Eternity';


const { SubMenu } = Menu;

class Sitebar extends React.Component {

    state = {
      current: 'mail',
    };
 
  handleClick = e => {
    // console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      

      <Menu  onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="logo" >
            <div>
                <img src={goobbueLogo} alt="Goob Logo" width="70" height="70" />
            </div>
        </Menu.Item >
        <Menu.Item key="about" >
            <div>

          <div>
              <ul>
                  <li><Link to='/'>About</Link></li>
              </ul>
              </div> 
            </div>
        </Menu.Item >
        <Menu.Item key="raids" >
            <div>

          <div>
              <ul>
                  <li><Link to='/raids'>Raids</Link></li>
              </ul>
              </div> 
            </div>
        </Menu.Item >
        <Menu.Item key="trials" >
            <div>

          <div>
              <ul>
                  <li><Link to='/trials'>Trials</Link></li>
              </ul>
              </div> 
            </div>
        </Menu.Item >
        <Menu.Item key="mounts" >
            <div>

          <div>
              <ul>
                  <li><Link to='/mounts'>Mounts</Link></li>
              </ul>
              </div> 
            </div>
        </Menu.Item >


        <SubMenu key="RaidSubMenu" icon={<DownOutlined />} title="Raids">
          <Menu.ItemGroup title="Stormblood">
            <Menu.Item key="setting:1">Omegascape 1</Menu.Item>
            <Menu.Item key="setting:2">Omegascape 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Shadowbringers">
        
            <Menu.Item key="setting:3">
                <div>
                    <div>
                        <ul>
                            <li><Link to='/raids/umbra'>Umbra</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
            <Menu.Item key="setting:4">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/raids/litany'>Litany</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
                <Menu.Item key="setting:5">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/raids/anamorphosis'>Anamorphosis</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
                <Menu.Item key="setting:6">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/raids/eternity'>Eternity</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item> 
    
          </Menu.ItemGroup>
          
         </SubMenu  >


        <SubMenu key="TrialSubMenu" icon={<DownOutlined />} title="Trials">
          <Menu.ItemGroup title="Stormblood">
            <Menu.Item key="setting:1">Susano</Menu.Item>
            <Menu.Item key="setting:2">Lakshmi</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Shadowbringers">
        
            <Menu.Item key="setting:3">
                <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/titania'>Titania</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
            <Menu.Item key="setting:4">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/innocence'>Innocence</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
                <Menu.Item key="setting:5">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/hades'>Hades</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item>
                <Menu.Item key="setting:6">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/seatofsacrifice'>Seat of Sacrifice</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item> 
                <Menu.Item key="setting:7">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/ruby'>Ruby Weapon</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item> 
                <Menu.Item key="setting:8">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/emerald'>Emerald Weapon</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item> 
                <Menu.Item key="setting:9">
            <div>
                    <div>
                        <ul>
                            <li><Link to='/trials/diamond'>Diamond Weapon</Link></li>
                        </ul>
                    </div>
                </div>
                </Menu.Item> 
    
          </Menu.ItemGroup>
          
         </SubMenu >

         <Menu.Item key="logout" >
            <div>

          <div>
              <ul>
                  <li onClick={this.props.clickLogout}>Logout</li>
              </ul>
              {/* <button onClick={this.props.clickLogout}>Logout</button> */}
              </div> 
            </div>
        </Menu.Item >
      </Menu>
    );
  }
}



export default Sitebar;




   {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>


        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
      
          </a>
        </Menu.Item> */}



// import React, { useState } from 'react';
// import logoutGoob from '../../../assets/logoutGoob.png';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// const Sitebar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/"><img src={logoutGoob}/></NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">About</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Raids
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Stormblood
//                 </DropdownItem>
//                 <DropdownItem>
//                  Shadowbringers
//                 </DropdownItem>
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Trials
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Stormblood
//                 </DropdownItem>
//                 <DropdownItem>
//                   Shadowbringers
//                 </DropdownItem>
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Audacity!</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Sitebar;