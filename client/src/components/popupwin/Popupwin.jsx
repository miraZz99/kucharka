import React, { useState } from 'react'
import './popupwin.css';
import { Popup } from '../../components';


const Popupwin = () => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
  setIsOpen(!isOpen);
  }

  return (
    <div className="popupwin">
      <div className="popupwin-button">
          <input
            type="button"
            value="Create"
            onClick={togglePopup}
          />
        </div>
      <div className="popupwin-content">
          {isOpen && <Popup
          content={<>

          {/* <h2>Create your recipe</h2> */}
          <div className="popupwin-content__recipename">
          <form>
            <p>
              <label for="name">Recipe name</label>
              <input class="input" id="name" type="text" />
            </p>
          </form>
          </div>
          <div className="popupwin-content__date">
          <form>
            <p>
              <label for="date-input">Date</label>
              <input class="input" id="date-input" type="date" />
            </p>
          </form>
          </div>
          <div className="popupwin-content__photo">
          <form>
            <p>
              <label for="file-input">Photo</label>
              <input id="file-input" class="input" type="file" />
            </p>
          </form>
          </div>
          <form>
            <p>Difficulty</p>
            <select>
              <option value="easy">Easy</option>
              <option value="not-easy">Not Easy</option>
              <option selected value="hard">Hard</option>
              <option value="masterchef">MasterChef</option>
            </select>
        
          </form>
          <form>
          
            <p>Description of recipe</p> 
            <textarea>
  
            </textarea>
        
          </form>
          <input type="submit" value="Create"></input>
          </>}
          handleClose={togglePopup}
          />}
        </div>
    </div>
  );
};


export default Popupwin