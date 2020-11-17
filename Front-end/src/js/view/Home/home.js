import { elements } from '../../utility/elements';

export const renderHomePage = () => {
	const markup = `
    <section id="slider" class="clear">
        <img src="https://mogi.vn/content/images/home/home-bg-d.jpg" alt="" style="width:1200px; margin-left:-120px">
    </section>
	<div id="intro">
		<h2> Ở đâu có BĐS, ở đó có CHÚNG TÔI </h2>
		<ul>
			<li>
				<figure>
				<a href = "http://localhost:8080/house">
					<img src="https://static1.cafeland.vn/cafelandnew/hinh-anh/2020/06/17/141/image-20200617104243-1.jpeg" style="width:240px;height:240px">
					<figcaption style="font-size:20px">Nhà ở</figcaption>
				</a>
				</figure>
			</li>
			<li>
				<figure>
				<a href = "http://localhost:8080/apartment">
				<img src="https://vinhomecitys.com/wp-content/uploads/2020/11/domino-halong-bay.jpg" style="width:240px;height:240px">
				<figcaption  style="font-size:20px">Chung cư</figcaption>
				</a>
				</figure>
			</li>
			<li>
				<figure>
				<a href = "http://localhost:8080/land">
				<img src="https://datnen-canho.com/wp-content/uploads/2019/10/D%E1%BB%B1-%C3%A1n-Alva-Plaza-1024x640.jpg" style="width:240px;height:240px">
				<figcaption  style="font-size:20px">Đất</figcaption>
				</a>
				</figure>
			</li>
			<li>
				<figure>
					<a href = "http://localhost:8080/house">
						<img src="https://pqr.vn/wp-content/uploads/2020/06/dinh-thu-la-gi1.jpg" style="width:240px;height:240px">
						<figcaption style="font-size:20px">Dinh thự</figcaption>
					</a>
				</figure>
			</li>	
			
		</ul>
    </div>`;
	elements.container.insertAdjacentHTML('beforeend', markup);
};