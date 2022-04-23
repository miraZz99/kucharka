import React, { useState } from 'react'
import './popupwin.css';
import { Popup } from '../../components';
import Create from '../../componenty_A/Create';
import ListData from '../../componenty_A/ListData';


const Popupwin = (props) => {

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
          <div className='Vypis'>
          <div className='zkouska'>
          <div className="popupwin-content__recipename">
          <form>
            <p>
              <label for="name">Recipe name</label>
              <input class="input" type="text" id="name" name="name" value={props.name} onChange={props.napln} />
            </p>
          </form>
          </div>
          <div className="popupwin-content__date">
          <form>
            <p>
              <label for="date-input">Preparation</label>
              <input class="input"  id="time-input" type="text"  name="preparation" value={props.preparation} onChange={props.napln} />
            </p>
          </form>
          </div>
          <div className="popupwin-content__photo">
          <form>
            <p>
              <label for="number-input">Evaluated</label>
              <input id="number-input" class="input" type="number" name="evaluated" value={props.evaluated} onChange={props.napln}/>
            </p>
          </form>
          </div>
          
          <form>
            <p>Difficulty</p>
      
            <select name = "difficulty" onChange={props.difficulty} >
            
            <input type="text" name = "difficulty" value={props.difficulty}  onChange={props.napln}/>
            
              <option selected value="Easy" >Easy</option>
              <option value="Medium"  >Medium</option>
              <option  value="Hard"  >Hard</option>
             
            </select>
        
        
          </form>
          <form>
          
            <p>Description of recipe</p> 


            <textarea name ="ingrediences" value={props.ingrediences}onChange={props.napln}>
  
            </textarea>
        
          </form>
          <form>
            <p>Author</p>
            <input type="text" name="author" value={props.author} onChange={props.napln}></input>
          </form>
          <input type="submit" value = "Create" onClick={props.create} ></input>
          </div>
         <div  className='neco'>
          <ListData books={props.input} /> 
          </div>
          </div>
          </>}
          handleClose={togglePopup}
          />}
        </div>
    </div>
  );
};


export default Popupwin