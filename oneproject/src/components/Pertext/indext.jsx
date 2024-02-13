import React, { useState } from 'react';

const Pertext = () => {

    return (
        <div>
           
            <div>

                <div >

                    <div >

                        基本信息
                    </div>
                    
                    <hr/>

                    <div >
                        <div>
                            <img class="J-setted-avatar" src="https://img.meituan.net/avatar/33e4cff85b4d852e598b689afdf21cca10857.jpg"/>
                                <div class="J-upload-avatar-w upload-avatar-image">
                                    <input type="button" class="J-upload-avatar upload-btn" value="更换头像"/>
                                        <input type="file" id="fileUpload" name="file"/>

                                        </div>
                                        <div class="tips">支持JPG,JPEG,PNG格式,且文件需小于1M</div>
                                </div>
                        </div>
                        <form id="J-userexinfo-form" class="userexinfo-form">
                            <div class="userexinfo-form-section">
                                <p>昵称：</p>
                                <span>
                                    <input type="text" name="nickName" id="userexinfo-form-nickname" class="ui-checkbox" placeholder="2-15个字，支持中英文、数字" value="fly燕454"/>
                                </span>
                            </div>
                            <div class="userexinfo-form-section">
                                <p>性别：</p>
                                <span>
                                    <input type="radio" name="gender" id="userexinfo-form-gender-1" value="1" class="ui-radio radio-first"/>
                                        <label for="userexinfo-form-gender-1">男</label>
                                </span>
                                <span>
                                    <input type="radio" name="gender" id="userexinfo-form-gender-2" value="2" class="ui-radio"/>
                                        <label for="userexinfo-form-gender-2">女</label>
                                </span>
                            </div>
                            <div class="date-picker userexinfo-form-section">
                                <p>生日：</p>
                                <span>
                                    <div class="ui-select">
                                        <select name="year" class="ui-select">
                                            <option>--</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001" selected="">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                        </select>
                                    </div>
                                    <span class="tip">年</span>
                                </span>
                                <span>
                                    <div class="ui-select">
                                        <select name="month" class="ui-select">
                                            <option>--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11" selected="">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <span class="tip">月</span>
                                </span>
                                <span>
                                    <div class="ui-select">
                                        <select name="day" class="ui-select">
                                            <option>--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24" selected="">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                    <span class="tip">日</span>
                                </span>
                            </div>

                            {/* <div class="userexinfo-form-section">
                                <p>生活状态：</p>
                                <span>
                                    <input type="radio" name="marriage" id="userexinfo-form-merriage-1" value="单身" class="ui-radio radio-first"/>
                                        <label for="userexinfo-form-merriage-1">单身</label>
                                </span>
                                <span>
                                    <input type="radio" name="marriage" id="userexinfo-form-merriage-2" value="热恋中" class="ui-radio">
                                        <label for="userexinfo-form-merriage-2">热恋中</label>
                                </span>
                                <span>
                                    <input type="radio" name="marriage" id="userexinfo-form-merriage-3" value="已婚" class="ui-radio">
                                        <label for="userexinfo-form-merriage-3">已婚</label>
                                </span>
                                <span>
                                    <input type="radio" name="marriage" id="userexinfo-form-merriage-4" value="为人父母" class="ui-radio">
                                        <label for="userexinfo-form-merriage-4">为人父母</label>
                                </span>
                            </div>
                            <div class="userexinfo-form-section">
                                <p>从事行业：</p>
                                <span>
                                    <div class="ui-select">
                                        <select id="job" name="job" class="ui-select"><option value="">--</option><option value="信息技术">信息技术</option><option value="金融保险">金融保险</option><option value="商业服务">商业服务</option><option value="建筑地产">建筑地产</option><option value="工程制造">工程制造</option><option value="交通运输">交通运输</option><option value="文化传媒">文化传媒</option><option value="娱乐体育">娱乐体育</option><option value="公共事业">公共事业</option><option value="学生">学生</option><option value="其他">其他</option></select>
                                    </div>
                                    <div class="ui-select">
                                        <select id="subjob" name="occupation" class="ui-select"><option value="">--</option></select>
                                    </div>
                                </span>
                            </div>

                            <div class="userexinfo-form-section expand-list">
                                <p>兴趣：</p>
                                <div class="interest-list">
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-1" value="美食" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-1">美食</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-2" value="动漫" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-2">动漫</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-3" value="摄影" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-3">摄影</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-4" value="电影" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-4">电影</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-5" value="体育" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-5">体育</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-6" value="财经" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-6">财经</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-7" value="音乐" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-7">音乐</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-8" value="游戏" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-8">游戏</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-9" value="科技" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-9">科技</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-10" value="旅游" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-10">旅游</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-11" value="文学" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-11">文学</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-12" value="公益" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-12">公益</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-13" value="汽车" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-13">汽车</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-14" value="时尚" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-14">时尚</label>
                                    </span>
                                    <span>
                                        <input type="checkbox" name="interest[]" id="userexinfo-form-interest-15" value="宠物" class="ui-checkbox">
                                            <label for="userexinfo-form-interest-15">宠物</label>
                                    </span>
                                    <span class="bottom-tips">选择你的兴趣使你获得个性化的电影推荐哦</span>
                                </div>
                            </div>
                            <div class="userexinfo-form-section">
                                <p>个性签名：</p>
                                <span>
                                    <input type="text" name="signature" id="userexinfo-form-bio" class="ui-checkbox" placeholder="20个字以内" value="">
                                </span>
                            </div>
                            <input id="csrf" type="hidden" name="csrf" value="a34e41dae0331bd2dfa60feee8d9521eefec41ee2b4ec06bc2b30e2ddb485194">
                                <div class="userexinfo-bottom-section clearfix">
                                    <input type="submit" class="form-save-btn" value="保存">
                                        <!-- <span id="cancell-btn" class="cancel_alert hand">注销账号1</span> -->
                                </div> */}

                        </form>
                    </div>
                </div>
                {/*  */}
            </div>
            )
}
export default Pertext
