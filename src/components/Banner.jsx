
import banner from '../assets/images/more/3.png';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content md:ml-72 ">
        <div className="max-w-md  ">
          <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
