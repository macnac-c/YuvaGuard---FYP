function SlashAccent({ color = "#2244EE" }) {
    return (
      <svg viewBox="0 0 80 60" fill="none" className="w-16 h-12">
        <path d="M18 8 L8 52" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M36 4 L26 48" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M58 10 L44 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
}

export default SlashAccent;