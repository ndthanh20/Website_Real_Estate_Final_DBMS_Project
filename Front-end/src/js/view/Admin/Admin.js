import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderAdminPage = () => {
    const markup = `
        <div class="admin">
            <h1>ADMINISTRATOR</h1>
            <div class="select">
                <select name="slct" id="slct" onChange="change()">
                    <optgroup>
                        <option selected disabled>------</option>
						<option value="house">House</option>
						<option value="apartment">Apartment</option>
						<option value="land">Land</option>
                        <option value="candidates">Candidate</option>
                    </optgroup>
                </select>
            </div>
            <div class="admin_page">
            </div>
        </div>
      `; 
    elements.container.insertAdjacentHTML('beforeend', markup);
};
