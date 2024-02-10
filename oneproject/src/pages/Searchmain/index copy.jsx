import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar
    //   改变搜索框的文字
        filterText={filterText}
        onFilterTextChange={setFilterText}
         />

    {/* 显示的内容 */}
      <ProductTable
    //   
        products={products}
    // 
        filterText={filterText}
    />
    </div>
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

function ProductTable({ products, filterText }) {
  const rows = [];
//   let lastCategory = null;

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
    // lastCategory = product.category;
  });

  return (
    <table>
      {/* <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead> */}

      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  onFilterTextChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText} 
        // placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  );
}

//显示的数据 
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];




export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
