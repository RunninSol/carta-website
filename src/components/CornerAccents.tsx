export function CornerAccents() {
  return (
    <>
      <svg
        className="pointer-events-none absolute left-0 top-0"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <polyline
          points="0,70 0,0 70,0"
          stroke="#C9A84C"
          strokeWidth="0.75"
          fill="none"
          opacity="0.25"
        />
        <polyline
          points="0,45 0,0 45,0"
          stroke="#C9A84C"
          strokeWidth="0.4"
          fill="none"
          opacity="0.12"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 right-0"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <polyline
          points="100,30 100,100 30,100"
          stroke="#C9A84C"
          strokeWidth="0.75"
          fill="none"
          opacity="0.25"
        />
        <polyline
          points="100,55 100,100 55,100"
          stroke="#C9A84C"
          strokeWidth="0.4"
          fill="none"
          opacity="0.12"
        />
      </svg>
    </>
  );
}
