import { useRouter } from "next/router";

const DataBreadcrumb = ({ link, title }) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-sm px-6 md:px-20 py-5 fixed top-0 left-0 w-full z-50">
      <ul className="flex items-center gap-x-2 md:gap-x-3 text-[12px] md:text-sm text-black/70 tracking-[0.3px]">
        <button
          onClick={() => router.back()}
          className="hover:text-accent font-medium transition-all duration-200 cursor-pointer flex-shrink-0"
        >
          Data
        </button>
        <span className="text-black/50 flex-shrink-0">&gt;</span>
        <a
          className="hover:text-accent font-medium transition-all duration-200 break-words min-w-0"
          href={link}
        >
          {title}
        </a>
      </ul>
    </div>
  );
};

export default DataBreadcrumb;
