"use client";

export const Input = (
  type: string,
  id: string,
  className: string,
  ...rest: Array<string>
) => {
  return <input type={type} id={id} className={className} {...rest} />;
};
