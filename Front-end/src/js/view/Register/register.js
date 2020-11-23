import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility'; 
import axios from 'axios';
import * as Login from '../Login/Login';

export const renderRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>Đăng kí tài khoản</h1><br>
            <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name" required></div>
            <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
			<div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
			<div><input style="${Utility.formStyle}" type="text" class="fullname" placeholder="Tên đầy đủ"></div>
			<select style="${Utility.formStyle}" name="type" class="sex_type" placeholder="Giới tính" >
                <option value="Nam" >Nam</option>
                <option value="Nữ" >Nữ</option>
			</select>
			<div><input style="${Utility.formStyle}" type="text" class="address" placeholder="Địa chỉ"></div>
			<div><input style="${Utility.formStyle}" type="text" class="phoneNumber" placeholder="Số điện thoại"></div>
			<div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Địa chỉ email"></div>
           <div><input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP"></div>
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.type_register_submit').addEventListener('click',() => getInfo('candidate'));
}

/*const renderCandidateRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>REGISTER FOR CANDIDATE</h1><br>
            <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name" required></div>
            <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
			<div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
			<div><input style="${Utility.formStyle}" type="text" class="fullname" placeholder="Tên đầy đủ"></div>
			<select style="${Utility.formStyle}" name="type" class="sex_type" placeholder="Giới tính" >
                <option value="Nam" >Nam</option>
                <option value="Nữ" >Nữ</option>
			</select>
			<div><input style="${Utility.formStyle}" type="text" class="address" placeholder="Địa chỉ"></div>
			<div><input style="${Utility.formStyle}" type="text" class="phoneNumber" placeholder="Số điện thoại"></div>
			<div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Địa chỉ email"></div>
           <div><input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP"></div>
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.type_register_submit').addEventListener('click',() => getInfo('candidate'));
}*/
const passIncorrect = () =>{
    const notice = document.querySelector('.password_notice') ? '' :`<p class="password_notice">password incorrect !</p>`;
    document.querySelector('.signup__form').insertAdjacentHTML('beforeend',notice);
}
const getInfo = (type) =>{
    const password = document.querySelector('.password').value;
	const passwordAgain = document.querySelector('.password_again').value;
	const fullname = document.querySelector('.fullname').value;
	const sex_type = document.querySelector('.sex_type').value;
	const address = document.querySelector('.address').value;
	const phoneNumber = document.querySelector('.phoneNumber').value;
	const email = document.querySelector('.email').value;
    if(password !== passwordAgain){
        passIncorrect();
        return;
	}
    const userName = document.querySelector('.user_name').value;
	if(!userName) 
	{
		alert("Hãy nhập userName")
		return;
	}
	if(!fullname) 
	{
		alert("Hãy nhập tên đầy đủ")
		return;
	}
	if(!address) 
	{
		alert("Hãy nhập địa chỉ")
		return;
	}
	if(!phoneNumber) 
	{
		alert("Hãy nhập số điện thoại")
		return;
	}
	if(!email) 
	{
		alert("Hãy nhập email")
		return;
	}
    let data;
    if(type === 'candidate'){
        data = {
            userName: userName,
			password: password,
			fullName: fullname,
			sex: sex_type,
			address: address,
			phoneNumber: phoneNumber,
			email: email,
            type: "candidate"
        }
    }
    
    /*if(type === 'employer'){
        const email = document.querySelector('.email').value;
        const address = document.querySelector('.address').value;
        const name = document.querySelector('.namee').value;
        if(!email || !name) return;
        data = {
            userName: userName,
            password: password,
            type: "employer",
            email: email,
            fullName: name,
            address: address
        }
    }*/
    
    fetch('http://localhost:3000/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => {
				alert('Đăng ký thành công')
				Utility.clearPage();
				Login.renderLogin();
			})
}
