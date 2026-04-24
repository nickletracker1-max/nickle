import React, { useState, useEffect, useRef } from 'react';

const SECTIONS = [
  { id: "prices",      label: "Prices"        },
  { id: "class-split", label: "Class 1 vs 2"  },
  { id: "lme-stocks",  label: "LME Stocks"    },
  { id: "indonesia",   label: "Indonesia"     },
  { id: "supply",      label: "Supply"        },
  { id: "pipeline",    label: "Pipeline"      },
  { id: "stainless",   label: "Stainless"     },
  { id: "battery",     label: "Battery Demand"},
  { id: "forecast",    label: "Forecast"      },
  { id: "balance",     label: "Balance"       },
  { id: "producers",   label: "Producers"     },
  { id: "history",     label: "History"       },
  { id: "drivers",     label: "Drivers"       },
  { id: "cost-curve",  label: "Cost Curve"    },
  { id: "calc",        label: "Calculator"    },
];

const SectionNav = () => {
  const [activeId, setActiveId] = useState("prices");
  const navRef = useRef(null);

  /* ── IntersectionObserver: highlight active section ── */
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Auto-scroll active pill into view ── */
  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeId]);

  /* ── Click: smooth scroll to section ── */
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 112; // navbar (56px) + this nav (~56px)
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="bg-white border-b border-bdr sticky top-[95px]   z-[40] overflow-x-auto no-scrollbar"
      aria-label="Page sections"
      id="page-nav"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        ref={navRef}
        className="max-w-[1600px] mx-auto px-8 flex gap-0.5 whitespace-nowrap py-3"
      >
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              data-id={id}
              onClick={() => handleClick(id)}
              className={`
                text-[12px] font-medium px-3.5 py-3 whitespace-nowrap
                border-b-[2px] transition-all duration-150 cursor-pointer
                bg-transparent border-t-0 border-l-0 border-r-0
                ${isActive
                  ? "text-accent border-b-accent font-semibold"
                  : "text-muted border-b-transparent hover:text-accent-light"
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SectionNav;