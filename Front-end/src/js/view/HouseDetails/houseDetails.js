import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderHousePage = house =>{
    const markup = `
    <div class="house_details" id="house_69312">
        <a style="text-align: center; display: block; margin-bottom: 20px">
            <img  alt="logo" witdh="auto" height="auto" src=${house.Image} >
        </a>
		<h1 class='title-product'>${house.title}</h1>
		<div class='location'> ${house.Location}</div>
		<div class="divide"> </div>

		<div class='short-detail'>
			<ul>
				<li>
					<span class="sp1"> Mức giá: </span>
					<span class="sp2"> ${house.Price} </span>
				</li>
				<li>
					<span class="sp1"> Diện tích: </span>
					<span class="sp2"> ${house.Area} </span>
				</li>
			</ul>
		
		<div class="divide"> </div>
		
		<div class='detail'>
			<span class='title-detail'> Thông tin mô tả </span>
			<div class='des-product'>${house.Description}</div>
		</div>

		<div class="divide"> </div>

        <div class='detail'>
			<span class='title-detail'> Thông tin bất động sản </span>
			<div class='box-round'>
				<div class="row-1">
					<span class="r1">Địa chỉ:</span>
					<span class="r2"> ${house.Location} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Số phòng ngủ:</span>
					<span class="r2"> ${house.NumberBed} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Số toilet:</span>
					<span class="r2"> ${house.NumberToilet} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Chủ đầu tư:</span>
					<span class="r2"> ${house.Investor} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Ngày đăng:</span>
					<span class="r2"> ${house.timePost} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Liên hệ:</span>
					<span class="r2"> ${house.Phone} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Mặt tiền:</span>
					<span class="r2"> ${house.MatTien} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Đường vào:</span>
					<span class="r2"> ${house.DuongVao} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Số tầng:</span>
					<span class="r2"> ${house.SoTang} </span>
				</div>
			</div>
		</div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}