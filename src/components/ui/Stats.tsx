import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface IStatItem {
  id: string;
  number: string;
  suffix?: string;
  labelKey: string;
  delay: number;
}

const Stats = () => {
  const { t } = useTranslation();

  const stats: IStatItem[] = [
    {
      id: "years",
      number: "3",
      suffix: "+",
      labelKey: "about.stats.years",
      delay: 0,
    },
    {
      id: "projects",
      number: "5",
      suffix: "+",
      labelKey: "about.stats.projects",
      delay: 0.2,
    },
    {
      id: "users",
      number: "15.000",
      suffix: "+",
      labelKey: "about.stats.users",
      delay: 0.4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const numberVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          className="text-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-700 dark:to-primary-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 dark:border-primary-600"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: {
              type: "spring" as const,
              stiffness: 300,
              damping: 20,
            },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div className="relative" variants={numberVariants}>
              <motion.span
                className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring" as const,
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.1,
                  },
                }}
                viewport={{ once: true }}
              >
                {stat.number}
                {stat.suffix && (
                  <motion.span
                    className="text-3xl md:text-4xl text-primary-500 dark:text-primary-100"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.5 + index * 0.1,
                        type: "spring" as const,
                        stiffness: 300,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.suffix}
                  </motion.span>
                )}
              </motion.span>
            </motion.div>
            <motion.p
              className="text-lg font-medium text-primary-500 dark:text-primary-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              {t(stat.labelKey)}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
