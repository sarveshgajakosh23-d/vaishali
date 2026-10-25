type StarProps = {
  className?: string;
  color?: string;
};

export function Star({ className = "", color = "currentColor" }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 2 L61 38 L98 38 L68 60 L79 96 L50 74 L21 96 L32 60 L2 38 L39 38 Z"
        fill={color}
      />
    </svg>
  );
}
