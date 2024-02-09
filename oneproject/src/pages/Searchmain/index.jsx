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
          <br/>
          <br/>
          <br/>
          <br/>
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
// 内容框
function ProductTable({ products, filterText }) {
    const rows = [];
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
    });
  
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  function ProductRow({ product }) {

    return (
      <tr>
          <div className='tu-kuang'>
          <ul >
                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.pipi.cn/mmdb/fb7386515370fa07ac87a9b97732f64f519a1.jpg?imageView2/1/w/218/h/300" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> 临时劫案</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>

                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.pipi.cn/mmdb/fb73862fb53c7ec696b5355e4ffa645077ef6.jpg?imageView2/1/w/218/h/300" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> 天降大任</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>

                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.pipi.cn/mmdb/fb7386929ab51b9235c696581b610612ce1a9.jpg?imageView2/1/w/218/h/300" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> 大雨</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>

                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png@170w_118h_1e_1c" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>

                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png@170w_118h_1e_1c" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>
                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="https://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png@170w_118h_1e_1c" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>
                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>

                    <li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li><li>
                        <div className='seletu-name' >
                            {/* 图片 */}
                            <div className='seletu-tu'>
                                <a href='#' >
                                    <div >
                                        {/* src={src} */}
                                        <img
                                            src="" />
                                    </div>
                                </a>
                            </div>
                            {/* 购票小标 */}
                            <div className='seletu-biao'>购票</div>
                            {/* 电影名：name={name} */}
                            <div className='seletu-tu-name'><a href='#' style={{ color: 'black' }}> ...</a></div>
                            {/* 评分：score={score} */}
                            <div className='seletu-tu-score'>暂无评分</div>
                        </div>
                    </li>
                    
                </ul>
              </div>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

export default Searchmain