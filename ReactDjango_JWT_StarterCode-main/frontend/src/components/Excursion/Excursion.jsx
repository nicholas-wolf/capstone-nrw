const Excursion = ({ text, userName, date }) => {
    return (
      <p>
        {userName}: {text}
        {date}
        
        <button>Reply</button>
        <button>Replies</button>
        <button>Going</button>
      </p>
    );
  };
  
  export default Excursion;