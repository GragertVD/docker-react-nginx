import { ChangeEvent, useState } from "react";

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }

  return {value, onChange}
}