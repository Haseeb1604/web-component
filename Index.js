const template = document.createElement('template')
template.innerHTML = `
<style>
.product__list .product-image {
    display: block;
    margin-bottom: 5px;
    border: 1px solid #988787;
    position: relative;
    padding-bottom: 40px;
}

.product__list .actions {
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 11px 0;
}

.product__list .actions .list-atc {
    background: transparent;
    border: medium none;
    text-transform: uppercase;
    margin-top: -3px;
}

.product__info{
    min-height: 50px;
}

.product__info .product-name {
    height: 45px;
    font-size: 13px;
    margin: 0;
    font-weight: 500;
    line-height: 1.35;
}

.product-name a{
    color: #1e1e1e;
    text-decoration: none;
}

.product__info .price-box {
    text-align: right;
}

.product__info .price {
    color: #d0a964;
    font-family: inherit;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
}

/* sale label */
.labels-box {
    left: -8px;
    position: absolute;
    top: 25px;
    z-index: 9;
}
.special-label {
    background-color: #000;
    padding: 3px 10px;
    width: 70px;
    -webkit-box-shadow: 0px 0px 17px -9px rgb(0, 0, 0 , 75%);
    -moz-box-shadow: 0px 0px 17px -9px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px -9px rgb(0, 0 ,0 , 75%);
}
.pro-label {
    clear: both;
    float: left;
    height: auto;
    margin-bottom: 1px;
    padding: 0 5px;
    width: 60px;
}
.pro-label p {
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
  <div class="user-card">
    <div class="col-sm-6 col-md-6 col-lg-4">
        <div class="product__list">
            <div class="product__display">
                <a href="" title="" class="product-image">
                <img style="width: 100%" src="">
                    <div class="actions">
                        <button type="button" title="Shop Now" class="list-atc btn-cart"><span>Shop Now</span></button>
                    </div>
                </a>
            </div>
            <div class="product__info d-flex justify-content-between">
                <h2 class="product-name">
                </h2>
                <div class="price-box">
                    <span class="price"></span>
                </div>
            </div>
    </div>
</div>
`
class UserCard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector(".product-image").src = this.getAttribute("linksrc")
        this.shadowRoot.querySelector("img").src = this.getAttribute("imgsrc")
        this.shadowRoot.querySelector(".product-name").innerHTML = this.getAttribute('productName')
        this.shadowRoot.querySelector(".price").innerHTML = this.getAttribute("productPrice")
    }
    connectedCallback(){
        let img = this.shadowRoot.querySelector('img')
        img.addEventListener('mouseover',function(){
            img.src = this.getAttribute("hoversrc")
        })
        img.addEventListener('mouseout',function(){
            img.src = this.getAttribute("imgsrc")
        })
    }
}

window.customElements.define('user-card', UserCard)