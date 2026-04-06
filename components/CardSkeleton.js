// components/CardSkeleton.js

function ShimmerBlock({ className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-90 shimmer" />
    </div>
  );
}

export default function CardSkeleton({ rows = 4 }) {
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-4 overflow-hidden">
        <div className="grid grid-cols-[minmax(150px,_1fr)_120px_120px_120px] gap-3 pb-3 border-b border-slate-200 mb-3">
          <ShimmerBlock className="h-4 w-24 rounded-full" />
          <ShimmerBlock className="h-4 w-20 rounded-full" />
          <ShimmerBlock className="h-4 w-20 rounded-full" />
          <ShimmerBlock className="h-4 w-20 rounded-full" />
        </div>

        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-[minmax(150px,_1fr)_120px_120px_120px] gap-3 items-center py-3 border-b last:border-b-0 border-slate-200"
            >
              <ShimmerBlock className="h-4 rounded-full w-full" />
              <ShimmerBlock className="h-4 rounded-full w-3/4" />
              <ShimmerBlock className="h-4 rounded-full w-3/4" />
              <ShimmerBlock className="h-4 rounded-full w-1/2" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shimmer {
          animation: shimmer 1.6s infinite;
          transform: translateX(-100%);
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
