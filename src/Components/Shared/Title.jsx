/* eslint-disable react/prop-types */

const Title = ({ title }) => {
  return (
    <div className="text-3xl md:text-5xl text-center text-red-400 font-bold p-2 border-y-4 border-dotted rounded-md border-red-800 w-2/3 mx-auto mt-20  mb-8  ">
      <p>{title}</p>
    </div>
  );
};

export default Title;
