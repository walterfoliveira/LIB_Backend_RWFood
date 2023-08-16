type Props = {
  label: string;
}

export const CustomButton = ({ label }: Props) => {
  return (
    <button className="p-2 text-white bg-blue-700 rounded">{label}</button>
  )
}