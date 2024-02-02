import Button from "./Shared/Button";

const Banner = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/uc?export=download&id=1G18bqgZCUHgbr1lqGjc2LqzvoJOU_0Fs";
    downloadLink.setAttribute("download", "");
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <div
        className="hero  pt-10 rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/gF4wRVy/banner.jpg)",
        }}
      >
        <div className=" hero-overlay bg-opacity-0"></div>
        <div className=" hero-content  flex-col-reverse lg:flex-row-reverse md:mx-16 gap-20">
          <img
            src="https://i.ibb.co/z8dLwk5/no-bg.png"
            className=" h-96 border-b-2 border-red-500 rounded-lg shadow-xl"
          />
          <div className="text-center lg:text-left ">
            <h1 className="text-red-400 text-3xl md:text-5xl font-bold">
              Rifat Hossain
            </h1>
            <p className="text-red-400  font-bold">Full Stack Web Developer </p>
            <p className="text-red-400  py-6">
              Hello and welcome! I am thrilled to have you here. I am Rifat
              Hossain, a dedicated Full Stack MERN Developer with a passion for
              crafting innovative digital solutions. What truly excites me about
              technology is its power to transform ideas into reality. I have
              had the privilege of working on diverse projects that challenged
              me to think creatively, tackle complex problems, and deliver
              solutions that exceeded expectations.
            </p>
            <div
              onClick={handleDownload}
              target="_blank"
              className="w-fit mx-auto lg:mx-0"
            >
              <Button text="Get Resume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
