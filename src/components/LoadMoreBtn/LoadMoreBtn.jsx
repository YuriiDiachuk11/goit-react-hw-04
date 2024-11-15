import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <div className={s.buttonBox}>
      <button
        className={s.button}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
