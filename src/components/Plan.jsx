import '../assets/plan.css';

    function Plan(props) {
        return (
    <div className={`plan ${props.isSelected ? "selected":""}`}>
    <div className={`title ${props.card.title}`}>{props.title}</div>
    <div className={`price ${props.card.price}`}>{props.price}
    </div>
    <div className='speed'>{props.speed}</div>
    <footer className='text'>{props.text}</footer>
        </div>
        );
    }
    
    export default Plan;