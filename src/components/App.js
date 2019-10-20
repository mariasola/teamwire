import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import AddWhish from "./AddWish";
import WishList from "./WishList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newInput: "",
      wishList: []
    };
    this.handleNewInput = this.handleNewInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleNewInput(ev) {
    const newInput = ev.currentTarget.value;
    this.setState({
      newInput: newInput
    });
  }
  handleClick(ev) {
    ev.preventDefault();
    this.state.wishList.push(this.state.newInput);
    this.setState({
      wishList: this.state.wishList,
      newInput: ""
    });
  }
  render() {
    const { newInput, wishList } = this.state;
    return (
      <div className="App">
        <Header />
        <AddWhish
          handleNewInput={this.handleNewInput}
          handleClick={this.handleClick}
          newInput={newInput}
          wishList={wishList}
        />
        <WishList wishList={wishList} handleToggle={this.handleToggle} />
        <Footer />
      </div>
    );
  }
}

export default App;
