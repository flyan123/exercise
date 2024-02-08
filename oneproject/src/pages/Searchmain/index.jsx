import React,{useState} from "react";
import PRODUCTS from '../Searchmain/products.json'


const Searchmain = () =>{

    return(
        <div>
            {/* PRODUCTS：数据 */}
            <FilterableProductTable products={PRODUCTS}/>
        </div>
    )
}


// 总的
function FilterableProductTable({ products }) {

    const [filterText, setFilterText] = useState('');
  
    return (
      <div>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
        <ProductTable
          products={products}
          filterText={filterText} />
      </div>
    );
  }

// 搜索框
function SearchBar({
    filterText,
    onFilterTextChange,
}) {
    
    return (
        <div className='HomeSearch'>
            <div >
                <img className='home-search-tu'
                src='https://tse4-mm.cn.bing.net/th/id/OIP-C.dBr7MmPncuvzT0NLXUwm2wAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
            </div>

            <div >
                <form >
                    <input
                        placeholder='搜索'
                        className='home-search'
                        value={filterText}
                        onChange={(e) => onFilterTextChange(e.target.value)} 
                    />
                </form>
            </div>
        </div>
    )
}

export default Searchmain