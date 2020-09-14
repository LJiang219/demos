
var data =  [
    {
        "productId": "9190307",
        "price": 128,
        "hostAvatarUrl": null,
        "title": "【向日葵】公寓民宿/ins画途风/投影/火车站/地铁",
        "rentType": 0,
        "layoutRoom": 1,
        "maxGuestNumber": 2,
        "locationArea": "火车站北站/宽城万达",
        "starRating": 50,
        "commentNumber": 4,
        "coverImage": "https://img.meituan.net/phoenix/3ec779e9b4aaab8bf553b99521152147235099.jpg",
        "favCount": 89,
        "poiId": "785228465",
        "dpPoiId": "785228465"
    },
    {
        "productId": "11097730",
        "price": 158,
        "hostAvatarUrl": null,
        "title": "中东大市场/中日联医院/红事会/欧亚超市/宜居2室/可做饭",
        "rentType": 0,
        "layoutRoom": 2,
        "maxGuestNumber": 4,
        "locationArea": "中日联医院、中东大市场",
        "starRating": 45,
        "commentNumber": null,
        "coverImage": "https://img.meituan.net/phoenix/e20e9b0171dc5bee5aaab664a3c6849e1878578.jpg",
        "favCount": 19,
        "poiId": "682530499",
        "dpPoiId": "682530499"
    },
    {
        "productId": "8218370",
        "price": 140,
        "hostAvatarUrl": null,
        "title": "会展中心/世纪广场（温馨大床房）",
        "rentType": 0,
        "layoutRoom": 1,
        "maxGuestNumber": 2,
        "locationArea": "国际会展中心、经开体育场",
        "starRating": 50,
        "commentNumber": 16,
        "coverImage": "https://img.meituan.net/phoenix/dcae9ac3faec7f9af2af517d20575c4c98198.jpg",
        "favCount": 87,
        "poiId": "1866959791",
        "dpPoiId": "1866959791"
    },
    {
        "productId": "10697052",
        "price": 130,
        "hostAvatarUrl": null,
        "title": "阳光里 莫兰迪灰阶 下楼迅驰  巨幕投影全智能家居",
        "rentType": 0,
        "layoutRoom": 1,
        "maxGuestNumber": 2,
        "locationArea": "净月大学城",
        "starRating": 50,
        "commentNumber": 15,
        "coverImage": "https://img.meituan.net/phoenix/724db2431c18bc7e1724d9e5b2ec97242208120.jpg",
        "favCount": 221,
        "poiId": "997875417",
        "dpPoiId": "997875417"
    },
    {
        "productId": "11080934",
        "price": 248,
        "hostAvatarUrl": null,
        "title": "香芋公寓阳光硅谷店甜蜜恋风投影幕布大床房",
        "rentType": 0,
        "layoutRoom": 1,
        "maxGuestNumber": 2,
        "locationArea": "硅谷大街",
        "starRating": 45,
        "commentNumber": null,
        "coverImage": "https://img.meituan.net/phoenix/5c562faed3ebcbe6b2e4359ded250dc54264996.jpg",
        "favCount": 16,
        "poiId": "1503003761",
        "dpPoiId": "1503003761"
    },
    {
        "productId": "10320431",
        "price": 128,
        "hostAvatarUrl": null,
        "title": "【Lumen民宿日租房】复地嘉年华广场 近农大 人文 密码自助入住 可做饭 调料齐全 网络电视 温馨浪漫 适合拍照",
        "rentType": 0,
        "layoutRoom": 1,
        "maxGuestNumber": 4,
        "locationArea": "净月大学城",
        "starRating": 50,
        "commentNumber": 14,
        "coverImage": "https://img.meituan.net/phoenix/53936ba4c1d537519970a43c31f231bb738462.jpg",
        "favCount": 145,
        "poiId": "1253081629",
        "dpPoiId": "1253081629"
    }
];

// function renderProducts(data) {
//     var str = data.reduce(function (prevData, item) {
//         return `${prevData} <div class="item">
//         <a href="#${item.poiId}">
//             <div class="product-card">
//                 <img class="product-img" src="${item.coverImage}" alt="">
//                 <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="" class="head-img">
//             </div>
//             <div class="product-info">
//                 <p class="product-title">${item.title}</p>
//                 <p class="sub-title"><span>整套${item.layoutRoom}居室·</span><span>可住${item.maxGuestNumber}人 | </span><span>${item.locationArea}</span></p>
//                 <p class="price-number numfont price"><span class="price-icon">￥</span>${item.price}</p>
//             </div>
//         </a>
//     </div>`
//     }, 
//     '');
//     var product = document.querySelector('.products');
//     product.innerHTML = str;
// }

// renderProducts(data);

// var nav = document.querySelector('.nav');
// nav.onmouseover = function (e) {
//     if (e.target.tagName === 'DD') {
//         var siblings = getSiblings(e.target);
//         for (var i = 0; i < siblings.length; i++) {
//             siblings[i].classList.remove('current');
//         }
//         e.target.classList.add('current');
//         data.sort(function (a, b) {return Math.random() - 0.5});
//         console.log(data)
//         renderProducts(data);
//     }
// }

function getSiblings (node) {
    var children = node.parentNode.children;
    var result = [];
    for(var i = 0; i < children.length; i++) {
        if (children[i] !== node) {
            result.push(children[i]);
        }
    }
    return result;
}

var obj = {
    // 当前选中的城市
    currentCity: "",
    // 城市与对应产品显示区域的对应关系
    cityToProducts: {},
    // 导航区域
    nav: document.querySelector('.nav'),
    // 产品显示区
    view: document.querySelector('.view'),
    //  城市对应数据的渲染
    renderProducts: function (data) {
        var str = data.reduce(function (prevData, item) {
            return `${prevData} <div class="item">
            <a href="#${item.poiId}">
                <div class="product-card">
                    <img class="product-img" src="${item.coverImage}" alt="">
                    <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="" class="head-img">
                </div>
                <div class="product-info">
                    <p class="product-title">${item.title}</p>
                    <p class="sub-title"><span>整套${item.layoutRoom}居室·</span><span>可住${item.maxGuestNumber}人 | </span><span>${item.locationArea}</span></p>
                    <p class="price-number numfont price"><span class="price-icon">￥</span>${item.price}</p>
                </div>
            </a>
        </div>`
        }, 
        '');
        var product = document.createElement('div');
        product.className = 'products clearfix';
        product.innerHTML = str;
        this.cityToProducts[this.currentCity] = product;
        this.view.appendChild(product);
        var siblingsProduct = getSiblings(product);
        for (var i = 0; i < siblingsProduct.length; i++) {
            siblingsProduct[i].style.display = 'none';
        }
    },
    bindEvent: function() {
        var self = this;
        this.nav.onmouseover = function (e) {
            if (e.target.tagName === 'DD') {
                // 导航切换
                var siblings = getSiblings(e.target);
                for (var i = 0; i < siblings.length; i++) {
                    siblings[i].classList.remove('current');
                }
                e.target.classList.add('current');
                // 存储当前选中的城市
                self.currentCity = e.target.innerText;
                // 如果当前选中的城市有对应的产品显示区那么进行切换显示
                if (self.cityToProducts[self.currentCity]) {
                    self.cityToProducts[self.currentCity].style.display = 'block';
                    var siblingsProduct = getSiblings(self.cityToProducts[self.currentCity]);
                    for (var i = 0; i < siblingsProduct.length; i++) {
                        siblingsProduct[i].style.display = 'none';
                    }
                    // 如果当前选中的城市没有对应的产品显示区那么进行获取数据创建产品显示区
                } else {
                    data = data.sort(function (a, b) { return Math.random() - 0.5})
                    self.renderProducts(data);
                }
            }
        }
    },
    // 初始化结构
    init: function() {
        this.renderProducts(data);
        this.bindEvent()
    }
}
obj.init()

