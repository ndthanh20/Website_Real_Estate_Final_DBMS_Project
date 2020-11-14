import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderJobPage = house =>{
    const markup = `
    <div class="house_details" id="house_69312">
        <a style="text-align: center; display: block; margin-bottom: 20px">
                <img  alt="logo" witdh="auto" height="auto" src=${house.Image} >
        </a>
		<h1>${house.title}</h1>
		<div> ${house.Location} </div>
		<ul>
			<li>
				<span> Mức giá </span>
				<span> ${house.Price} </span>
			</li>
			<li>
				<span> Diện tích </span>
				<span> ${house.Area} </span>
			</li>
		</ul>

		<span> Thông tin mô tả </span>
		<div>  ${house.Description} </div>
    
   		<div class="house_feature">
			<div>
				<span> Địa chỉ: </span>
				<span> ${house.Location} </span>
			</div>
			<div>
				<span> Diện tích: </span>
				<span> ${house.Area} </span>
			</div>
			<div>
				<span> Số phòng ngủ: </span>
				<span> ${house.NumberBed} </span>
			</div>
			<div>
				<span> Số toilet: </span>
				<span> ${house.NumberToilet} </span>
			</div>
			<div>
				<span> Chủ đầu tư: </span>
				<span> ${house.Investor} </span>
			</div>
			<div>
				<span> Ngày đăng: </span>
				<span> ${house.timePost} </span>
			</div>
			<div>
				<span> Liên hệ: </span>
				<span> ${house.Phone} </span>
			</div>
		</div>
	</div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}