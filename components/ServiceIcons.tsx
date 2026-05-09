const iconClass = "h-6 w-6 text-accent";

export function IconCode() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"
      />
    </svg>
  );
}

export function IconCart() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13L5.4 5M7 13l-1.5 6h13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
}

export function IconOps() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h16M4 12h10M4 18h7M15 15l3 3m0 0 3-3m-3 3V9"
      />
    </svg>
  );
}
