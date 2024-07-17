import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Grid, List } from "lucide-react";

type Tab = {
  title?: string | React.ReactNode | any;
  value: string;
  content?: (alignment: "grid" | "list") => React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  onChangeAlignment,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  onChangeAlignment: (alignment: "grid" | "list") => void;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [alignment, setAlignment] = useState<"grid" | "list">("grid");

  // Fetch alignment preference from local storage on mount
  useEffect(() => {
    const savedAlignment = localStorage.getItem("alignment");
    if (savedAlignment && (savedAlignment === "grid" || savedAlignment === "list")) {
      setAlignment(savedAlignment as "grid" | "list");
    } else {
      // If no preference found in local storage, default to "grid"
      setAlignment("grid");
    }
  }, []);

  // Update local storage when alignment changes
  useEffect(() => {
    localStorage.setItem("alignment", alignment);
  }, [alignment]);

  const moveSelectedTabToTop = (idx: number) => {
    const selectedTab = propTabs[idx];
    setActive(selectedTab);
  };

  const handleChangeAlignment = (newAlignment: "grid" | "list") => {
    setAlignment(newAlignment);
    onChangeAlignment(newAlignment);
  };

  return (
    <>
      <div
        className={cn(
          "relative flex items-start justify-start flex-col gap-4 w-full mx-auto mb-2 overflow-hidden rounded-xl",
          containerClassName
        )}
      >
        <div className="flex w-full justify-between">
          <div className="flex gap-2 p-2 rounded-full bg-[#272B30]">
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => {
                  setActive(tab);
                  moveSelectedTabToTop(idx);
                }}
                className={cn(
                  "relative h-auto w-auto px-4 py-2 text-xs text-slate-400 transition-all duration-500 ease-in-out rounded-full",
                  active.title === tab.title ? activeTabClassName : tabClassName
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center p-2 bg-[#272B30] rounded-full gap-2">
            <button
              className={cn(
                "h-auto w-auto p-2 rounded-full border text-xs text-gray-300 transition-all duration-500 ease-in-out",
                alignment === "list"
                  ? "bg-accent border-teal-400 text-teal-400 shadow-teal-400/50"
                  : "border-transparent bg-transparent"
              )}
              onClick={() => handleChangeAlignment("list")}
            >
              <List />
            </button>
            <button
              className={cn(
                "h-auto w-auto p-2 rounded-full border text-xs text-gray-300 transition-all duration-500 ease-in-out",
                alignment === "grid"
                  ? "bg-accent border-teal-400 text-teal-400 shadow-teal-400/50"
                  : "border-transparent bg-transparent"
              )}
              onClick={() => handleChangeAlignment("grid")}
            >
              <Grid />
            </button>
          </div>
        </div>
        <motion.div
          className={cn(
            "relative flex items-start justify-start w-full overflow-hidden",
            contentClassName
          )}
        >
          {active.content && active.content(alignment)}
        </motion.div>
      </div>
    </>
  );
};
