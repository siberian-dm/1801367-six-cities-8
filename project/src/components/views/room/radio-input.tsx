type RatingInputProps = {
  value: string;
  title: string;
  isDisabled: boolean;
  isChecked: boolean;
}

function RadioInput({ value, title, isDisabled, isChecked }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        disabled={isDisabled}
        checked={isChecked}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RadioInput;
