export function AuditedBadge() {
  return (
    <div className="flex items-center gap-1 px-2.5 py-1 w-fit bg-[#dbf4f0] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1ebaa5]" width="20" height="20" viewBox="0 0 16 16">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
          <path d="m5.75 7.75l2.5 2.5l6-6.5" />
        </g>
      </svg>
      <span className="text-[#1ebaa5] text-sm font-semibold">Audited</span>
    </div>
  );
}
