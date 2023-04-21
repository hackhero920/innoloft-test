import remove from "../../images/remove.svg";

const BadgeEdit = ({ label, onClick, name }) => {
  return (
    <div
      className={
        label
          ? "bg-[#E5E7EB] py-1 px-4 rounded-full flex justify-center"
          : "hidden"
      }
    >
      <span>{label}</span>
      <button onClick={onClick} className="w-6">
        <img src={remove} alt="" />
      </button>
    </div>
  );
};

export default BadgeEdit;
