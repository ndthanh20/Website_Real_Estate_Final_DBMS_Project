import { elements } from './utility/elements'
import * as Utility from './utility/Utility'
import * as JobList from './view/JobList/JobList'
import * as Home from './view/Home/home'
import * as CompanyList from './view/Companies/companyList'
import * as HouseList from './view/HouseList/HouseList'
import * as ApartmentList from './view/ApartmentList/ApartmentList'
import * as LandList from './view/LandList/LandList'
import * as HouseDetails from './view/HouseDetails/houseDetails'
import * as ApartmentDetails from './view/ApartmentDetails/apartmentDetails'
import * as LandDetails from './view/LandDetails/landDetails'

import * as JobDetails from './view/JobDetails/jobDetails'
import * as CompanyDetails from './view/CompanyDetails/companyDetails'
import * as Login from './view/Login/Login'
import * as Profile from './view/Profile/profile'
import * as Blog from './view/Blog/Blog'
import * as Register from './view/Register/register'
import * as AboutUs from './view/AboutUs/AboutUs'
import * as Candidates from './view/Candidates/Candidates'
import * as Admin from './view/Admin/Admin'
import axios from 'axios'



const jobs = require('../../data/jobs-data.json');

const companies = require('../../data/company-data.json');

const house = require('../../data/house-data.json');

const apartment = require('../../data/apartment-data.json');

const land = require('../../data/land-data.json')
const jobNames = jobs.map(job => Utility.getJobCodeFromUrl(job.url));

const companyNames = companies.map(com => `companies/${Utility.getCompanyCodeFromUrl(com.url)}`);

const houseNames = house.map(house => Utility.getHouseCodeFromUrl(house.url));

const apartmentNames = apartment.map(apartment => Utility.getApartmentCodeFromUrl(apartment.url));


const landNames = land.map(land => Utility.getLandCodeFromUrl(land.url));
const state = {};

const fetchData = async () => {
	await axios.get('http://localhost:3000/state')
		.then(async response => {
			console.log(response.data[0]);
			if (response.data[0]) {
				state.user = response.data[0];
				console.log('dang dang nhap');
				document.querySelector('.switchState').innerHTML = '';
				document.querySelector('.switchState').insertAdjacentHTML('beforeend', `
			<a class="profile" href="/profile">Profile</a>`);

				var new_a = document.createElement("a");
				var node = document.createTextNode("Log Out");
				new_a.className = "logout_btn";
				new_a.href = "http://localhost:8080/";
				new_a.appendChild(node);
				var ul_header = document.getElementById("ul_header");
				ul_header.appendChild(new_a);
				document.querySelector(".logout_btn").addEventListener("click", function () {
					fetch('http://localhost:3000/state', {
						method: "DELETE"
					}).then()
						.catch(err => {
							console.log(err)
						})
				});

				if (response.data[0].userName === 'admin') {
					document.querySelector('.switchState').innerHTML = '';
					document.querySelector('.switchState').insertAdjacentHTML('beforeend',
						`<a class="profile" href="/admin">Đăng bài</a>`);
				}

				await axios.get(`http://localhost:3000/auth/users/${state.user.userName}`)
					.then(response => {
						console.log(response.data[0]);
						state.userProfile = response.data[0];
						/*var new_li = document.createElement("li");
						var new_a = document.createElement("a");
						var node = document.createTextNode("Đăng Bài");
						new_a.className = "dangbai";
						new_a.href = "http://localhost:8080/dangbai";
						new_a.appendChild(node);
						new_li.appendChild(new_a);
						
						var ul_header = document.getElementById("ul_header");
							  ul_header.appendChild(new_li);*/
					}).catch(err => {
						console.log(err);
					})
			} else {
				console.log('khong ai dang nhap');
				document.querySelector('.switchState').innerHTML = '';
				document.querySelector('.switchState').insertAdjacentHTML('beforeend', `
        <a class="signin" href="/signin">Sign in</a>
        `);
			}
		}).catch(err => {
			console.log(err);
		});
};

fetchData()


document.querySelector('.search_field').addEventListener('change', e => {
	document.getElementById('search').setAttribute("href", `http://localhost:8080/search-${e.target.value}`);
});


['hashchange', 'load'].forEach(event => window.addEventListener(event, e => {
	const link = window.location.href
	const path = link.slice(22, link.length)
	console.log(path)
	if (link.includes('search')) {
		const searchWord = path.slice(7);
		console.log(searchWord);
		renderSeachingHousePage(searchWord);
		renderSeachingApartmentPage(searchWord);
		return;
	}

	if (jobNames.find(el => el === path)) {
		console.log('find!')
		renderEachJobPage(path);
		return;
	}

	if (companyNames.find(el => el === path)) {
		console.log('find!')
		renderEachCompanyPage(path);
		return;
	}

	if (houseNames.find(el => el === path)) {
		console.log('find!')

		renderEachHousePage(path);
		return;
	}
	if (apartmentNames.find(el => el === path)) {
		console.log('find!')
		renderEachApartmentPage(path);
		return;
	}
	if (landNames.find(el => el === path)) {
		console.log('find!')
		renderEachLandPage(path);
		return;
	}

	switch (path) {
		case '':
			renderHomePage()
			return;
		case 'jobs':
			renderJobsPage()
			return
		case 'house':
			renderHousePage()
			return
		case 'apartment':
			renderApartmentPage()
			return
		case 'land':
			renderLandPage()
			return
		case 'companies':
			renderCompaniesPage()
			return
		case 'blogs':
			renderBlog()
			return
		case 'signin':
			renderLogin()
			return
		case 'register':
			renderRegister()
			return
		case 'aboutus':
			renderAbouUs()
			return;
		case 'profile':
			renderProfile()
			return;
		case 'admin':
			renderAdmin()
			return;
		case 'find-candidates':
			renderCandidates()
			return;
		case 'defaut':
			renderErorr();
	}
}));

const renderLogin = () => {
	Utility.clearPage();
	Login.renderLogin();
}

const renderRegister = () => {
	Utility.clearPage();
	Register.renderRegister();
}

const renderEachJobPage = (jobCode) => {
	Utility.clearPage();
	console.log(jobCode)
	axios.get(`http://localhost:3000/jobs/${jobCode}`)
		.then(response => {
			console.log(2)
			JobDetails.renderJobPage(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderEachHousePage = (houseCode) => {
	Utility.clearPage();
	console.log(houseCode)
	axios.get(`http://localhost:3000/house/${houseCode}`)
		.then(response => {
			console.log(2)
			HouseDetails.renderHousePage(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderEachApartmentPage = (apartmentCode) => {
	Utility.clearPage();
	axios.get(`http://localhost:3000/apartment/${apartmentCode}`)
		.then(response => {
			ApartmentDetails.renderApartmentPage(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderEachLandPage = (landCode) => {
	Utility.clearPage();
	axios.get(`http://localhost:3000/land/${landCode}`)
		.then(response => {
			LandDetails.renderLandPage(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderSeachingJobsPage = search => {
	Utility.clearPage();
	axios.get(`http://localhost:3000/jobs/search/${search}`)
		.then(response => {
			JobList.renderSearchJobList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderSeachingHousePage = search => {
	Utility.clearPage();
	axios.get(`http://localhost:3000/house/search/${search}`)
		.then(response => {
			HouseList.renderSearchHouseList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderSeachingApartmentPage = search => {
	Utility.clearPage();
	axios.get(`http://localhost:3000/apartment/search/${search}`)
		.then(response => {
			ApartmentList.renderSearchApartmentList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}

const renderEachCompanyPage = (companyCode) => {
	const index = companyNames.findIndex(el => el === companyCode);
	Utility.clearPage();
	CompanyDetails.renderCompanyPage(companies[index]);
}

const renderCompaniesPage = async () => {
	Utility.clearPage();
	await axios.get('http://localhost:3000/companies')
		.then(response => {
			if (response.data)
				CompanyList.renderCompanyList(companies);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderHomePage = () => {
	Utility.clearPage();
	Home.renderHomePage();
};
const renderJobsPage = async () => {
	Utility.clearPage();
	await axios.get('http://localhost:3000/jobs')
		.then(response => {
			if (response.data)
				JobList.renderJobList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderHousePage = async () => {
	Utility.clearPage();
	await axios.get('http://localhost:3000/house')
		.then(response => {
			console.log(1)
			if (response.data)
				HouseList.renderHouseList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}

const renderApartmentPage = async () => {
	Utility.clearPage();
	await axios.get('http://localhost:3000/apartment')
		.then(response => {
			console.log(1)
			if (response.data)
				ApartmentList.renderApartmentList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderLandPage = async () => {
	Utility.clearPage();
	await axios.get('http://localhost:3000/land')
		.then(response => {
			console.log(1)
			if (response.data)
				LandList.renderLandList(response.data);
		}
		).catch(err => {
			console.log(err);
		});
}
const renderProfile = () => {
	Utility.clearPage()
	axios.get('http://localhost:3000/state')
		.then(response => {
			const userName = response.data[0].userName
			axios.get(`http://localhost:3000/auth/users/${userName}`)
				.then(response => {
					const userInfo = response.data[0]
					console.log(userInfo)
					if (userInfo.type === 'candidate')
						Profile.renderCandidateProfile(userInfo);
					else
						Profile.renderEmployerProfile(userInfo);
				})
		})
}
const renderAdmin = () => {
	Utility.clearPage()
	Admin.renderAdminPage()
}
const renderCandidates = () => {
	Utility.clearPage();
	Candidates.renderCandidates();
}

const renderBlog = () => {
	Utility.clearPage();
	Blog.renderBLog();
}

const renderAbouUs = () => {
	Utility.clearPage();
	AboutUs.renderAboutUs();
}


function change() {
	console.log('hello')
}