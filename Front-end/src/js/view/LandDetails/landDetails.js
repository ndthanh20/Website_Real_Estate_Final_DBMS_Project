import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderLandPage = land =>{
    const markup = `
    <div class="land_details" id="land_69312">
        <a style="text-align: center; display: block; margin-bottom: 20px">
            <img  alt="logo" witdh="auto" height="auto" src=${land.HinhAnh} >
        </a>
		<h1 class='title-product'>${land.title}</h1>
		<div class='location'> ${land.ViTri}</div>
		<div class="divide"> </div>

		<div class='short-detail'>
			<ul>
				<li>
					<span class="sp1"> Mức giá: </span>
					<span class="sp2"> ${land.GiaTien} </span>
				</li>
				<li>
					<span class="sp1"> Diện tích: </span>
					<span class="sp2"> ${land.DienTich} </span>
				</li>
			</ul>
		
		<div class="divide"> </div>
		
		<div class='detail'>
			<span class='title-detail'> Thông tin mô tả </span>
			<div class='des-product'>${land.MoTa}</div>
		</div>

		<div class="divide"> </div>

        <div class='detail'>
			<span class='title-detail'> Thông tin bất động sản </span>
			<div class='box-round'>
				<div class="row-1">
					<span class="r1">Địa chỉ:</span>
					<span class="r2"> ${land.ViTri} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Chủ đầu tư:</span>
					<span class="r2"> ${land.Chudautu} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Ngày đăng:</span>
					<span class="r2"> ${land.NgayDang} </span>
				</div>
				<div class="divide"> </div>
				<div class="row-1">
					<span class="r1">Liên hệ:</span>
					<span class="r2"> ${land.DienThoai} </span>
				</div>
			</div>
		</div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}