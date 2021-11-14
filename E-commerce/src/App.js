import React from "react";
import data from "./data.json"
import Products from "./components/Products"
import Filter from "./Filter"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
       products:data.products,
       size:"",
       sort:"",
    }
  };

sortProducts(){

}

filterProducts(){

}


  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div>
            <div className="content"></div>
            <div className="main">
              <Filter 
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              />
              <Products products={this.state.products}/>
            </div>
          </div>

        </main>
        <footer>Footer</footer>
      </div>
    );
  }
  }
  

export default App;
