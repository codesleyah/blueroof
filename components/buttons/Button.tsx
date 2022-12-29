interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full px-3 py-2 text-base font-bold text-white bg-blue-900 hover:bg-black"
    >
      {text}
    </button>
  );
}
