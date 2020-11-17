import { elements } from '../../utility/elements';
import * as Utility from '../../utility/Utility';



const EachLand = land => {
	const markup = `
	<div class="land" id="land">
			<a class="logoland" href="/${Utility.getLandCodeFromUrl(land.url)}">
				<img alt="Logo" src=${land.HinhAnh} style="width:250px; height:250px;" >
			</a>
			<a href="/${Utility.getLandCodeFromUrl(land.url)}" style="font-size: 25px; color:blue;">${land.TieuDe}</a>
			<h3 style="font-size: 20px; margin: 20px">Địa chỉ: ${land.ViTri}</h3>
			<ul class="prop-attr">
				<li class="area">Diện tích:  ${land.DienTich} </li> 
			</ul>
			<div class="price">${land.GiaTien} </div> 
	</div>
      `;
	return markup;
};

const renderMore = (landList, first, last) => {
	const LandPage = `
        ${landList.slice(first, last).map(land => EachLand(land)).join('')}
    `;
	document.querySelector('.page').insertAdjacentHTML('beforeend', LandPage);
}


export const renderLandList = landList => {
	let firstElement = 0;
	const LandPage = `
        <div class="page">
            ${landList.slice(0, 4).map(land => EachLand(land)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', LandPage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(landList, firstElement, firstElement + 4);
	})
};

export const renderSearchLandList = landList => {
	let firstElement = 0;
	const LandPage = `
        <div class="page">
            <h1>Number of results: ${landList.length}</h1>
            ${landList.slice(0, 4).map(land => EachLand(land)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', LandPage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(landList, firstElement, firstElement + 4);
	})
}