import type { ITimelineItem } from "../../types";

interface TimelineProps {
  items: ITimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative py-4 pl-6 md:pl-8">
      <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-850" />

      <div className="flex flex-col gap-12">
        {items.map((experience) => (
          <div
            key={experience.id}
            className="relative flex flex-col gap-2"
          >
            <div className="absolute -left-[24.5px] top-[7px] z-10 w-[11px] h-[11px] rounded-full bg-[#fcfcfc] dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-750" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-neutral-150 dark:border-neutral-900 pb-2">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-md font-bold text-neutral-950 dark:text-white tracking-tight">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono">
                  {experience.logo &&
                    (Array.isArray(experience.logo) ? (
                      <div className="flex gap-1.5 mr-1">
                        {experience.logo.map((logo, i) => (
                          <a
                            key={logo}
                            href={
                              Array.isArray(experience.websites)
                                ? experience.websites[i]
                                : experience.websites
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-80 shrink-0"
                          >
                            <img
                              src={logo}
                              alt=""
                              className="w-5 h-5 rounded-none object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                            />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={
                          Array.isArray(experience.websites)
                            ? experience.websites[0]
                            : (experience.websites as string)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80 mr-1 shrink-0"
                      >
                        <img
                          src={experience.logo as string}
                          alt=""
                          className="w-5 h-5 rounded-none object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                        />
                      </a>
                    ))}

                  {Array.isArray(experience.websites) &&
                  experience.company.includes("|") ? (
                    <div className="flex items-center gap-1.5 font-bold">
                      {experience.company.split("|").map((name, i) => (
                        <div
                          key={name}
                          className="flex items-center gap-1.5"
                        >
                          <a
                            href={
                              (experience.websites as string[])[i] ||
                              (experience.websites as string[])[0]
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline underline-offset-2"
                          >
                            {name.trim()}
                          </a>
                          {i <
                            (experience.company.split("|") as string[])
                              .length -
                              1 && (
                            <span className="text-neutral-200 dark:text-neutral-800">
                              /
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={
                        Array.isArray(experience.websites)
                          ? experience.websites[0]
                          : (experience.websites as string)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors underline underline-offset-2 font-bold"
                    >
                      {experience.company}
                    </a>
                  )}
                </div>
              </div>

              <div className="text-[10px] font-mono tracking-wider text-neutral-400 dark:text-neutral-500 uppercase md:text-right shrink-0">
                {experience.period}
              </div>
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm mt-1 max-w-3xl font-sans">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
