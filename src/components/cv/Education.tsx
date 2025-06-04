interface EducationItemProps {
  course: string;
  period: string;
  institution: string;
  details?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ course, period, institution, details }) => {
  return (
    <article className="mt-2 first:mt-0 leading-tight">
      <div className="flex flex-row justify-between">
        <p className="font-bold">{course}</p>
        <p className="text-xs">{period}</p>
      </div>
      <p>{institution}</p>
      {details && (
        <ul className="text-sm list-disc list-inside">
          {details.map((detail, index) => (
            <li key={index}>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default EducationItem;