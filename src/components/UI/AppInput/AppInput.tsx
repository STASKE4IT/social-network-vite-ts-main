type AppInputProps = {
  inputType: string;
  inputPlaceholder: string;
};

export const AppInput = ({ inputPlaceholder, inputType }: AppInputProps) => {
  return <input type={inputType} placeholder={inputPlaceholder} />;
};
