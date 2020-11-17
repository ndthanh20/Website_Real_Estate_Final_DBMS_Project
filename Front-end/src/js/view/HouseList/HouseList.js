import { elements } from '../../utility/elements';
import * as Utility from '../../utility/Utility';



const EachHouse = house => {
	const markup = `
	<div class="house" id="house">
			<a class="logohouse" href="/${Utility.getHouseCodeFromUrl(house.url)}">
				<img alt="Logo" src=${house.Image} style="width:250px; height:250px;" >
			</a>
			<a href="/${Utility.getHouseCodeFromUrl(house.url)}" style="font-size: 25px; color:blue;">${house.title}</a>
			<h3 style="font-size: 20px; margin: 20px">Địa chỉ: ${house.Location}</h3>
			<ul class="prop-attr">
				<li class="area">Diện tích:  ${house.Area} </li>
				<li class="numberbed">Số phòng ngủ: ${house.NumberBed} </li> 
				<li class="numbertoilet">Số toilet: ${house.NumberToilet} </li>  
			</ul>
			<div class="price">${house.Price} </div> 
	</div>
      `;
	return markup;
};

const renderMore = (houseList, first, last) => {
	const HousePage = `
        ${houseList.slice(first, last).map(house => EachHouse(house)).join('')}
    `;
	document.querySelector('.page').insertAdjacentHTML('beforeend', HousePage);
}


export const renderHouseList = houseList => {
	let firstElement = 0;
	const HousePage = `
        <div class="page">
            ${houseList.slice(0, 4).map(house => EachHouse(house)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', HousePage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(houseList, firstElement, firstElement + 4);
	})
};

export const renderSearchHouseList = houseList => {
	let firstElement = 0;
	const HousePage = `
        <div class="page">
            <h1>Number of results: ${houseList.length}</h1>
            ${houseList.slice(0, 4).map(house => EachHouse(house)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', HousePage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(houseList, firstElement, firstElement + 4);
	})
}