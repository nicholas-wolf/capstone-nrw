const Excursion = ({ text, userName, date }) => {
    return (
      <p>
        {userName}: {text}
        {date}
      </p>
    );
  };
  
  export default Excursion;