interface CustomFormProps {
  title: string;
  description: string;
  btnLabel: string;
  search?: string;
  handleClick: (e: any) => void;
  handleChange: (e: any) => void;
  handleSearch?: (e: any) => void;
}
