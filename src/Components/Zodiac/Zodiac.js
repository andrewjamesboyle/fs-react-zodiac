import './zodiac.css';

export default function Zodiac(props) {
  return (
    <>
      <div className='zodiac'>
        <img src={`${process.env.PUBLIC_URL}/zodiac/${props.name}.png`}/>
        <p>{props.name}</p>
        <p>{props.dates}</p>
      </div>
    </>
  );
}