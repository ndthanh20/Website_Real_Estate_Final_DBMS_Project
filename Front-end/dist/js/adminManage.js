//const { getApartmentCodeFromUrl } = require("../../src/js/utility/Utility")

const change = async () => {

	const value = document.getElementById('slct').value
	switch (value) {
		case 'house':
			renderData('house')
			break
		case 'apartment':
			renderData('apartment')
			break
		case 'land':
			renderData('land')
			break
		case 'candidates':
			renderData('auth')
			break
		default:
			clearPage()
	}
}
const clearPage = () => {
	document.querySelector('.admin_page').innerHTML = ''
}
const remove = (title, type) => {
	const confirmed = confirm("Do you want to delete " + title + " ?")
	if (confirmed) {
		fetch(`http://localhost:3000/${type}/${title}`, {
			method: 'DELETE'
		}).then(response => {
			renderData(type)
		})
	} else {
		alert("cancel")
	}
}
const fix = () => {
	alert("This feature is not available now ...")
}
const add = (type) => {
	if (type === 'auth')
		alert("This feature is not available now ...")
	else
		renderAddForm(type)
}
const renderData = async (type) => {

	clearPage()
	await fetch(`http://localhost:3000/${type}`)
		.then(response => response.json())
		.then(data => {
			const markup = `
                <div class="add_button" onClick="add('${type}')">
                    Add
                    <img src="../images/add.svg" height=30/>
                </div>
                <table>
                    <tr>
                    <th>Title</th>
                    <th class="change_unit">Change</th>
                    <th class="delete_unit">Delete</th>
                    </tr>
                    ${data.map(el => {
				let title
				let url
				if (el.title) title = el.title
				else title = el.userName

				if (type === 'jobs')
					url = getJobCodeFromUrl(el.url)
				if (type === 'companies')
					url = 'companies/' + getCompanyCodeFromUrl(el.url)
				if (type === 'house')
					url = getHouseCodeFromUrl(el.url)
				if (type === 'apartment')
					url = getApartmentCodeFromUrl(el.url)
				if (type === 'land')
					url = getLandCodeFromUrl(el.url)
				return `<tr>
                            <th><a href="/${url}" style="color:rgb(42 1 206)">${title}</a></th>
                            <th class="change_unit"><img class="change_button" onClick="fix('${title}','${type}')" src="../images/fix.svg" height=20/></th>
                            <th class="delete_unit"><img class="delete_button" onClick="remove('${title}','${type}')" src="../images/delete.svg" height=20/></th>
                        </tr>
                        `}).join('')}
                </table>
                `
			document.querySelector('.admin_page').insertAdjacentHTML('beforeend', markup)
		})
}

const renderAddForm = (type) => {
	clearPage()
	const markup = `
    <div id="container">
        <form action="" method="get">
            <div class="left-container">
                <div>
                    <label><p>Tiêu đề:</p></label>
                    <input class="input_field" type="text" id="titles" value="" required>
                </div>
                <div>
                    <label><p>Url:</p></label>
                    <input class="input_field" type="text" id="url" value="" required>
                </div>
                <div>
                    <label><p>Vị trí:</p></label>
                    <input class="input_field" type="text" id="Location"value="" required>
                </div>
                <div>
                    <label><p>Giá:</p></label>
                    <input class="input_field" type="text" id="Price" value="" required>
                </div>
                <div>
                    <label><p>Diện tích:</p></label>
                    <input class="input_field" type="text" id="Area" value="" required>
                </div>
                <div>
                    <label><p>Số phòng ngủ:</p></label>
                    <input class="input_field" type="text" id="NumberBed" value="" required>
                </div>
                <div>
                    <label><p>Số phòng toilet:</p></label>
                    <input class="input_field" type="text" id="NumberToilet" value="" required>
                </div>
            </div>
            <div class="right-container">
                <div>
					<label><p>Hình ảnh:</p></label>
					<input class="input_field" type="text" id="Image" value="" required>
                </div>
                <div>
                    <label><p>Mặt tiền:</p></label>
                    <input class="input_field" type="text" id="MatTien" value="" required>
                </div>
                <div>
					<label><p>Đường vào:</p></label>
					<input class="input_field" type="text" id="DuongVao" value="" required>
				</div>
				<div>
					<label><p>Số tầng:</p></label>
					<input class="input_field" type="text" id="SoTang" value="" required>
				</div>
				<div>
					<label><p>Chủ đầu tư:</p></label>
					<input class="input_field" type="text" id="Investor" value="" required>
                </div>
                <div>
                    <label><p>Mô tả:</p></label>
                    <textarea style="font-size: 20px" name="experience" id="Description" cols="40" rows="6"></textarea>
                </div>
            </div>
        </form>
	</div>
	
    <div class="add_type"><button class="add_type_button">Add</button></div>
    
    `
	document.querySelector('.admin_page').insertAdjacentHTML('beforeend', markup)
	document.querySelector('.add_type_button').addEventListener('click', function () {
		if (type === 'house') {
			const title = document.getElementById('titles').value
			const url = document.getElementById('url').value
			const Location = document.getElementById('Location').value
			const Price = document.getElementById('Price').value
			const Area = document.getElementById('Area').value
			const NumberBed = document.getElementById('NumberBed').value
			const NumberToilet = document.getElementById('NumberToilet').value
			const Image = document.getElementById('Image').value
			const MatTien = document.getElementById('MatTien').value
			const DuongVao = document.getElementById('DuongVao').value
			const SoTang = document.getElementById('SoTang').value
			const Investor = document.getElementById('Investor').value
			const Description = document.getElementById('Description').value

			const data = {
				title: title,
				url: url,
				Location: Location,
				Price: Price,
				Area: Area,
				NumberBed: NumberBed,
				NumberToilet: NumberToilet,
				Image: Image,
				MatTien: MatTien,
				DuongVao: DuongVao,
				SoTang: SoTang,
				Investor: Investor,
				Description: Description,
				timePost: new Date()
			}
			if (data.title === '') {
				alert('Enter the title ...')
				return
			}
			fetch('http://localhost:3000/house', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				alert('Đăng bài thành công')
				renderData('house')
			})
		}
		if(type === 'apartment'){
			const title = document.getElementById('titles').value
			const url = document.getElementById('url').value
			const Location = document.getElementById('Location').value
			const Price = document.getElementById('Price').value
			const Area = document.getElementById('Area').value
			const NumberBed = document.getElementById('NumberBed').value
			const NumberToilet = document.getElementById('NumberToilet').value
			const Image = document.getElementById('Image').value
			const Investor = document.getElementById('Investor').value
			const Description = document.getElementById('Description').value

			const data = {
				title: title,
				url: url,
				Location: Location,
				Price: Price,
				Area: Area,
				NumberBed: NumberBed,
				NumberToilet: NumberToilet,
				Image: Image,
				Description: Description,
				Investor: Investor,
				timePost: new Date()
			}
			/*if (data.title === '') {
				alert('Enter the title ...')
				return
			}*/
			fetch('http://localhost:3000/apartment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				alert('Đăng bài thành công')
				renderData('apartment')
			})
		}
		if(type === 'land'){
			const title = document.getElementById('titles').value
			const url = document.getElementById('url').value
			const Location = document.getElementById('Location').value
			const Price = document.getElementById('Price').value
			const Area = document.getElementById('Area').value
			const Image = document.getElementById('Image').value
			const Investor = document.getElementById('Investor').value
			const Description = document.getElementById('Description').value

			const data = {
				title: title,
				url: url,
				Location: Location,
				Price: Price,
				Area: Area,
				Image: Image,
				Description: Description,
				Investor: Investor,
				timePost: new Date()
			}
			/*if (data.title === '') {
				alert('Enter the title ...')
				return
			}*/
			fetch('http://localhost:3000/land', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				alert('Đăng bài thành công')
				renderData('land')
			})
		}
	})
}


const getCompanyCodeFromUrl = url => {
	return url.slice(29, url.length);
}
const getJobCodeFromUrl = url => {
	return url.slice(28, url.length);
}
const getHouseCodeFromUrl = url => {
	return url.slice(26, url.length);
}
const getApartmentCodeFromUrl = url => {
	return url.slice(26, url.length);
}
const getLandCodeFromUrl = url => {
	return url.slice(26, url.length);
}
