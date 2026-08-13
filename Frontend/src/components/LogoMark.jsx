const LogoMark = ({ size = 36, bg = "#2244EE", check = "white" }) => (
    <svg viewBox="0 0 36 36" fill="none" width={size} height={size}>
      <rect width="36" height="36" rx="6" fill={bg} />
      <path d="M18 6L8 11V19C8 24.5 12.5 29.5 18 31C23.5 29.5 28 24.5 28 19V11L18 6Z" fill={check} opacity="0.9" />
      <path d="M14 18.5L16.5 21L22 15.5" stroke={bg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default LogoMark;