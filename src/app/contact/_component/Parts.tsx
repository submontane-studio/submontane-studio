"use client";

type InputProps = {
  id: string;
  className?: string | undefined;
  [rest: string]:
    | string
    | boolean
    | undefined
    | ((
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>,
      ) => void)
    | undefined;
  checked?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const Input = ({ id, className, onChange, ...rest }: InputProps) => {
  return (
    <input
      id={id}
      className={className}
      {...rest}
      onChange={onChange}
      // onBlur={validate}
    />
  );
};

export const Textarea = ({ id, className, ...rest }: InputProps) => {
  return (
    <textarea id={id} className={className} {...rest} /*onBlur={validate}*/ />
  );
};
