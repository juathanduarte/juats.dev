interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white relative inline-block">
        {title}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-primary-500 rounded-full" />
      </h2>
    </div>
  );
};

export default SectionTitle;
