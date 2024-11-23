interface FormInputProps {
  ref?: React.RefObject<HTMLInputElement>
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export default function FormInput({
  ref,
  label,
  type,
  name,
  value,
  onChange,
  error,
}: FormInputProps) {
  console.log('FormInput rendered');
  console.log(ref);
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full border-b border-gray-300 pt-6 pb-2 px-0 
                 text-gray-800 focus:border-blue-500 focus:outline-none text-lg" // Increased font size
        placeholder=" "
        id={name}
      />
      <label
        htmlFor={name}
        className="absolute left-0 top-0 text-gray-600 text-lg 
                 transition-all pointer-events-none
                 peer-placeholder-shown:text-lg
                 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:top-4
                 peer-focus:top-0 
                 peer-focus:text-lg 
                 peer-focus:text-blue-500"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
