import '../styles/home-styles/styles.css';

function Homepage() {
  return (
    <div>
      <div className='content'>
        <h1>Enhance Your Beauty</h1>
        <p>
          {" "}
          &quot;Enjoy exceptional beauty and grooming services focused on quality and <br />
             your satisfaction.Book your appointment today and treat yourself!&quot;
        </p>
        <div>
          <button type='button'><span></span>BOOK NOW</button>
          <button type='button'><span></span>MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;