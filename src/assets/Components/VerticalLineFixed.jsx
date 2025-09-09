export default function VerticalLineFixed() {
  return (
    <> 
        <div
        aria-hidden="true"
        className="hidden sm:block fixed top-0 left-2 h-screen w-[1px] bg-cyan-500 dark:bg-cyan-500 pointer-events-none z-60"
        />
        <div
        aria-hidden="true"
        className="hidden sm:block fixed top-0 left-0 h-screen w-[1px] bg-cyan-500 dark:bg-cyan-500 pointer-events-none z-60"
        />
    </>
  );
}