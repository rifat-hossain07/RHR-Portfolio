/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <button className="btn skeleton bg-red-400  text-xl text-black hover:bg-white hover:text-red-400  border-red-400 hover:border-red-400">
      {text}
    </button>
  );
};

export default Button;
