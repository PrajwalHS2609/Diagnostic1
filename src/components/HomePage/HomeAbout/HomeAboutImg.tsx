export default function HomeAboutImg() {
  return (
    <div className="homeAboutImg-container">
      <div className="homeAboutImg-content">
        <img
          src="https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg?t=st=1734260669~exp=1734264269~hmac=78b599004a80ecd5ba0f0d36e47f37dc1bb85ceb71108a48c9c5482ff3e32eab&w=996"
          alt=""
        />
      </div>
      <div className="homeAboutImg-content">
        <div className="homeAboutImg-item">
          <p>
            We are committed to delivering personalized care to every patient
            who walks through our doors, and we strive to create a warm and
            welcoming environment where our patients feel at ease.
          </p>
          <div className="homeAboutImg-innerItem">
            <img
              src="https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1734263639~exp=1734267239~hmac=4bae318f3adadad33841fdf26eec03d7194cbfb0fff3dfb4afbd81598edea094&w=740"
              alt=""
            />
            <span>
              {" "}
              <h5>John Doe</h5>
              Managing Director
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
