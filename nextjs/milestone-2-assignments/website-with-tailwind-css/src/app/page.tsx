import './styles/button.css'

function Homepage() {
  return (
    <div className="flex items-center justify-center min-100" >
      <div className="content w-full text-center text-white">
        <h1 className="text-[62px] mt-[80px]">Enhance Your Beauty</h1>
        <p className="mt-5 mb-5 mx-auto font-thin leading-[25px]">
          "Enjoy exceptional beauty and grooming services focused on quality and <br />
          your satisfaction. Book your appointment today and treat yourself!"
        </p>
        <div>
          <button type="button" className="btn relative overflow-hidden">
            <span className="span-bg"></span>BOOK NOW
          </button>
          <button type="button" className="btn relative overflow-hidden">
            <span className="span-bg"></span>MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
