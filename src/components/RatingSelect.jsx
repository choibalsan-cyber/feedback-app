import {useState, useContext, useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10);
  const {feedbackEdit} = useContext(FeedbackContext);
  
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected( +e.currentTarget.value);
    select(+e.currentTarget.value);
  } 

  return (
    <ul className="rating">
        <li>
            <input type="radio" value='1' name="rating" id="num1"
            checked={selected === 1} onChange={handleChange} />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" value='2' name="rating" id="num2"
            checked={selected === 2} onChange={handleChange} />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" value='3' name="rating" id="num3"
            checked={selected === 3} onChange={handleChange} />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" value='4' name="rating" id="num4"
            checked={selected === 4} onChange={handleChange} />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" value='5' name="rating" id="num5"
            checked={selected === 5} onChange={handleChange} />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" value='6' name="rating" id="num6"
            checked={selected === 6} onChange={handleChange} />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" value='7' name="rating" id="num7"
            checked={selected === 7} onChange={handleChange} />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" value='8' name="rating" id="num8"
            checked={selected === 8} onChange={handleChange} />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" value='9' name="rating" id="num9"
            checked={selected === 9} onChange={handleChange} />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" value='10' name="rating" id="num10"
            checked={selected === 10} onChange={handleChange} />
            <label htmlFor="num10">10</label>
        </li>        
    </ul>
  )
}

export default RatingSelect