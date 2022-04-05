var homeContent = `        <div class="hero">
<h1>very cool vibey store</h1>
</div>
<div class="content">
<div class="best-sellers">
    <h3>our best sellers</h3>
    <div class="best-sellers-imgs">
        <div>
            <h2>product one</h3>
                <img src="images/product-one.jpg" alt="">
        </div>
        <div>
            <h2>product two</h3>
                <img src="images/product-two.jpg" alt="">
        </div>
        <div>
            <h2>product three</h3>
                <img src="images/product-three.jpg" alt="">
        </div>
    </div>
</div>
<div class="aboutus">
    <div class="about-img">
        <img src="images/logo.png" alt="">
    </div>
    <div class="about-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione pariatur numquam illum
            voluptas dolorem nemo totam animi in? Odit dolore dolor, nihil quae iusto earum iste veritatis
            sint nostrum nemo libero voluptatem adipisci corporis maxime officiis sed deserunt ducimus
            doloribus eveniet praesentium dignissimos nulla nobis quod corrupti! Ut, similique!</p>
    </div>
</div>
<div class="come-see-us">
    <h1>come see us in person!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolorum fugit non repellendus
        ullam, repudiandae, quae perferendis pariatur consectetur aspernatur ex eius veniam. Voluptate, eos
        itaque? Distinctio facilis enim recusandae!</p>
</div>
</div>`;
var aboutContent = '<h1>about</h1>';
var productsContent = '<h1>products</h1>';
var ourteamContent = '<h1>contact</h1>';


export function modelPageName(pgName) {
    $("#app").html(eval(pgName));
}