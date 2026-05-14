import type { ITimelineItem } from "../../types";

interface TimelineProps {
  items: ITimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-400 to-transparent md:from-primary-500 md:via-primary-400 md:to-primary-300 transform md:-translate-x-0.5" />

      <div className="flex flex-col gap-8">
        {items.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-start ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-0 md:left-1/2 top-0 z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full border-2 border-primary-600 transform md:-translate-x-4">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            <div
              className={`pl-12 md:pl-0 w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      {experience.logo &&
                        (Array.isArray(experience.logo) ? (
                          <div className="flex gap-2">
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
                                className="transition-transform hover:scale-110"
                              >
                                <img
                                  src={logo}
                                  alt={`Logo da ${experience.company}`}
                                  className="inline-block w-8 h-8 rounded-lg object-cover flex-shrink-0"
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
                            className="transition-transform hover:scale-110"
                          >
                            <img
                              src={experience.logo as string}
                              alt={`Logo da ${experience.company}`}
                              className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                            />
                          </a>
                        ))}
                      {Array.isArray(experience.websites) &&
                      experience.company.includes("|") ? (
                        <div className="flex items-center gap-1.5 text-base md:text-lg font-semibold">
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
                                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                              >
                                {name.trim()}
                              </a>
                              {i <
                                (experience.company.split("|") as string[])
                                  .length -
                                  1 && (
                                <span className="text-gray-400 dark:text-gray-500">
                                  |
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
                          className="text-base md:text-lg font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          {experience.company}
                        </a>
                      )}
                    </div>
                    <div className="flex justify-start">
                      <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
