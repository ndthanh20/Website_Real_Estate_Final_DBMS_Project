import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderApartmentPage = apartment =>{
    const markup = `
    <div class="apartment_details" id="apartment_69312">
        <a style="text-align: center; display: block; margin-bottom: 20px">
            <img  alt="logo" witdh="auto" height="auto" src=${apartment.Image} >
        </a>
		<h1 class='title-product'>${apartment.title}</h1>
		<div class='location'> ${apartment.Location}</div>
		<div class="divide"> </div>

		<div class='short-detail'>
			<ul>
				<li>
					<span class="sp1"> Mức giá: </span>
					<span class="sp2"> ${apartment.Price} </span>
				</li>
				<li>
					<span class="sp1"> Diện tích: </span>
					<span class="sp2"> ${apartment.Area} </span>
				</li>
			</ul>
		
		<div class="divide"> </div>
		
		<div class='detail'>
			<span class='title-detail'> Thông tin mô tả </span>
			<div class='des-product'>${apartment.Description}</div>
		</div>

		<div class="divide"> </div>

        <div class='detail'>
			<span class='title-detail'> Thông tin bất động sản </span>
			<div class='box-round'>
				<div class="row-1">
					<span class="r1">Địa chỉ:</span>
					<span class="r2"> ${apartment.Location} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Số phòng ngủ:</span>
					<span class="r2"> ${apartment.NumberBed} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Số toilet:</span>
					<span class="r2"> ${apartment.NumberToilet} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Chủ đầu tư:</span>
					<span class="r2"> ${apartment.Investor} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Ngày đăng:</span>
					<span class="r2"> ${apartment.timePost} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Liên hệ:</span>
					<span class="r2"> ${apartment.Phone} </span>
				</div>
			</div>
		</div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}