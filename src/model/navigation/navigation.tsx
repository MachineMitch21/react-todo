import React from "react";
import "./navigation.css";

interface INavigationItemData {
  text: string;
  navHref: string;
}

interface IHamburgerButtonState {
  visible: boolean;
}

export class HamburgerButton extends React.Component {
  state: IHamburgerButtonState;

  constructor(props: any) {
    super(props);
    this.state = {
      visible: true
    };
  }

  render() {
    return (
      <div className="HamburgerButton">
        <span className="HamburgerButton-Top"></span>
        <span className="HamburgerButton-Middle"></span>
        <span className="HamburgerButton-Bottom"></span>
      </div>
    );
  }
}

export class NavigationItem extends React.Component<INavigationItemData> {
  constructor(props: INavigationItemData) {
    super(props);
  }

  render() {
    return (
      <div className="NavigationItem">
        <a className="NavigationLink" href={this.props.navHref}>
          {this.props.text}
        </a>
      </div>
    );
  }
}

export class NavigationList extends React.Component {
  render() {
    return <div className="NavigationList">{this.props.children}</div>;
  }
}

export class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="NavBar">
          <HamburgerButton />
        </div>
        <NavigationList>
          <NavigationItem text="Home" navHref="#" />
          <NavigationItem text="Contact" navHref="#" />
          <NavigationItem text="Projects" navHref="#" />
        </NavigationList>
      </div>
    );
  }
}
