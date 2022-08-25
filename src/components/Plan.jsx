import '../assets/plan.css';
import React, {useState} from 'react';

    function Plan(props) {

        const [pressed, setPressed] = useState(false);
      const  ClickMe=()=>{
            setPressed(!pressed);
            
        }
        return (
    <div className={`plan ${props.isSelected ? "selected":""}`}>
    <div className={`title ${props.card.title}`}>{props.title}</div>
    <div className={`price ${props.card.price}`}>{props.price}
    </div>
    <div className='speed'>{props.speed}</div>
    <footer className='text'>{props.text}</footer>
    <button className='button' onClick={ClickMe}>{pressed ? 'Тариф выбран' : "Выбери тариф"}</button>
        </div>
        );
    }
    
    export default Plan;