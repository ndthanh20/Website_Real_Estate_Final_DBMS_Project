import { elements } from '../../utility/elements';




export const renderAboutUs = () => {
	const markup = `
    	<div id="aboutUs">
        	<div id="logoAboutUs">
        		<img id="imgAboutUs" src="https://www.hrcsuite.com/wp-content/uploads/2018/08/team.jpg" alt="Team Work">
        	</div>
        	<div id="title">
        		<p>NHÓM 4</p>
        	</div>
       		<div id="introduce">
        		<p>Giới thiệu chung về nhóm 4:</p>
        		<ul>
        			<li>Nhóm gồm 2 thành viên:</li>
        			<ol id="listMember">
        				<li>Nguyễn Duy Thành</li>
        				<li>Nguyễn Duy Niên</li>
        			</ol>
        		</ul>
				<br>
				<br>
        	</div>
        	<div id ="logoUET">
            	<img id="UET" src="https://lh3.googleusercontent.com/proxy/-b-bUi5grB0cNI2qEsf2K20O3IsHVeDUo1vcbcbjpVPY8Fr34SD1wpA6DTp4JLH7AaYt8k8xfasuOpKLZCbC40rW3Qg" alt="">	            <img id="UET" src="https://lh3.googleusercontent.com/proxy/-b-bUi5grB0cNI2qEsf2K20O3IsHVeDUo1vcbcbjpVPY8Fr34SD1wpA6DTp4JLH7AaYt8k8xfasuOpKLZCbC40rW3Qg" alt="">
			</div>
	 	</div>
	`
}
elements.container.insertAdjacentHTML('beforeend', markup);