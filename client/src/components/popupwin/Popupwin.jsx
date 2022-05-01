import React, { useState } from 'react'
import './popupwin.css';
import { Popup } from '../../components';
import Image from '../../componenty_A/DeleteRecipe';
import ListData from '../../componenty_A/ListData';


const Popupwin = (props) => {



  const { ingredients, setIngredients } = props

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    props.setInput("")
    // setIngredients( [{raw_materials: "",
    // count: "",
    // unit:""}])
    
  }

  const remove =()=>{
    
  const newIngredients = [...ingredients];
  console.log(newIngredients);
  if(newIngredients.length !=1){
  newIngredients.splice(newIngredients, 1 )
    setIngredients(newIngredients)
  }
}

  const add =()=>{
  const newIngredients = [...ingredients, {
    raw_materials: "",
    count: "",
    unit:""
  }]
  setIngredients(newIngredients)
}
 const handleChange= (ingredient, index) => (event) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1, {...ingredient, [ event.target.name]: event.target.value})
    setIngredients(newIngredients)
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
                      <label htmlFor="name">Recipe name</label>
                      <input className="input" type="text" id="name" name="name" value={props.name} onChange={props.napln} />
                    </p>
                  </form>
                </div>
                <div className="popupwin-content__date">
                  <form>
                    <p>


                      <label htmlFor="date-input" >Preparation</label>

                      <input className="input" id="time-input" type="time" name="preparation" value={props.preparation} onChange={props.napln} />
                    </p>
                  </form>
                </div>
                <div className='recipe' >
                  <div className="popupwin-content__photo">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className='neco' >
                          <p id ="raw_materials">
                          <label htmlFor="number-input">Raw_materials</label>
                          <input id="number-input" className="input" type="text" name="raw_materials" value={ingredients.raw_materials} onChange={handleChange(ingredient, index)}  />
                        </p>
                        <p className='widht' id ="count">
                          <label htmlFor="number-input">Count</label>
                          <input type="number" name="count" value={ingredients.count} onChange={handleChange(ingredient, index)} />
                        </p>
                    <p id ="unit">
                    <label htmlFor="number-input">Unit</label>
                        <select className='select' name="unit" value={ingredients.unit} onChange={handleChange(ingredient, index)}>
                    <option ></option>
                    <option value="g" >g</option>
                    <option value="ks"  >ks</option>
                   
                  </select>
                  </p>
                  <div className='add'>
                  <i class="fa-solid fa-plus"  onClick={add }></i>
                  </div>
                  <div className='delete'>
                  <i class="fa-solid fa-trash"onClick={remove }> </i> 
                   </div>
                      </div>
                  ))}
                    
                    <form>

                    </form>
                  </div>
                  <div className="popupwin-content__photo">
                    <form>

                    </form>
                  </div>
                </div>
                <form>
                  <p>Difficulty</p>

                  <select name="difficulty" value={props.difficulty} onChange={props.napln} >
                    <option ></option>
                    <option value="Easy" >Easy</option>
                    <option value="Medium"  >Medium</option>
                    <option value="Hard"  >Hard</option>
                  </select>


                </form>
                <form>

                  <p>Description of recipe</p>


                  <textarea name="description" value={props.description} onChange={props.napln}>

                  </textarea>

                </form>
                <form>
                  <p>Author</p>
                  <input type="text" name="author" value={props.author} onChange={props.napln}></input>
                </form>
                <input type="submit" value="Create" onClick={props.create} ></input>
              </div>
              <div className='neco'>
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