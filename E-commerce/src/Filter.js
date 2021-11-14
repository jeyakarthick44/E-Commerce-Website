import React,{Component} from "react";


class Filter extends Component {
  render(){
    return (
        <div className="filter">
            <div className="filter-result">
                {this.props.count} Products Found
            </div>
            <div className="filter-sort">
                    <select>
                        <option value="lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
            </div>
            <div className="filter-size">
                    <select>
                        <option value="">All</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XLL">XLL</option>
                    </select>
            </div>
        </div>
    )
  }
}

export default Filter;