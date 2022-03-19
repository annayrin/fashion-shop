
import React from "react";
import { createMedia } from "@artsy/fresnel";
import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

 const AppMedia = createMedia({

    breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920

  }

});
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const {
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
  } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "8vh" }}
      >
        <Menu fixed="top" inverted >
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <Menu fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right">
        {rightItems.map((item) => (
          <Menu.Item {...item} />
        ))}
      </Menu.Menu>
    </Menu>
  );
};


class NavBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div style={{ minHeight: "8vh" }}>
        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >

          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
        </Media>
      </div>
    );
  }
}

const leftItems = [
  { as: Link, to:"/", content: "Home", key: "home" },
  { as: Link, to:"/products", content: "Products", key: "products" },
  { as: Link, to:"/review", content: "Review", key: "review" }
];

const rightItems = [

];

function Header() {

    const {user, isAuthenticated} = useAuth0();

    console.log(user);
    console.log(isAuthenticated);

    rightItems.length = 0;

    if(isAuthenticated){
        rightItems.push ({ as: Link, to: "/login", content: "Log Out", key: "login" })
        // rightItems.push(`<div>user.name</div>`,
        //   `<button onClick={()=> logout()}>Logout<button></button>`);
    }
    else {
        rightItems.push ({ as: Link, to: "/login", content: "Login", key: "login" });
    }

    return (
        <MediaContextProvider>
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </NavBar>
    </MediaContextProvider>
    )
}
    
export default Header;