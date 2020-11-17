import { elements } from '../../utility/elements';
import * as Utility from '../../utility/Utility';



const EachApartment = apartment => {
	const markup = `
	<div class="apartment" id="apartment">
			<a class="logoapartment" href="/${Utility.getApartmentCodeFromUrl(apartment.url)}">
				<img alt="Logo" src=${apartment.Image} style="width:250px; height:250px;" >
			</a>
			<a href="/${Utility.getApartmentCodeFromUrl(apartment.url)}" style="font-size: 25px; color:blue;">${apartment.title}</a>
			<h3 style="font-size: 20px; margin: 20px">Địa chỉ: ${apartment.Location}</h3>
			<ul class="prop-attr">
				<li class="area">Diện tích:  ${apartment.Area} </li>
				<li class="numberbed">Số phòng ngủ: ${apartment.NumberBed} </li> 
				<li class="numbertoilet">Số toilet: ${apartment.NumberToilet} </li>  
			</ul>
			<div class="price">${apartment.Price} </div> 
	</div>
      `;
	return markup;
};

const renderMore = (apartmentList, first, last) => {
	const ApartmentPage = `
        ${apartmentList.slice(first, last).map(apartment => EachApartment(apartment)).join('')}
    `;
	document.querySelector('.page').insertAdjacentHTML('beforeend', ApartmentPage);
}


export const renderApartmentList = apartmentList => {
	let firstElement = 0;
	const ApartmentPage = `
        <div class="page">
            ${apartmentList.slice(0, 4).map(apartment => EachApartment(apartment)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', ApartmentPage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(apartmentList, firstElement, firstElement + 4);
	})
};

export const renderSearchApartmentList = apartmentList => {
	let firstElement = 0;
	const ApartmentPage = `
        <div class="page">
            <h1>Number of results: ${apartmentList.length}</h1>
            ${apartmentList.slice(0, 4).map(apartment => EachApartment(apartment)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
	elements.container.insertAdjacentHTML('beforeend', ApartmentPage);
	document.querySelector('.see_more').addEventListener('click', e => {
		firstElement += 4;
		renderMore(apartmentList, firstElement, firstElement + 4);
	})
}