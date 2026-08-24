const ContactCard = ({
  icon,
  title,
  value,
  link,
}) => {
  return (
    <a
      href={link}
      target={link.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noreferrer"
      className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
    >
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <p className="mt-1 truncate font-semibold text-gray-200 group-hover:text-cyan-400">
          {value}
        </p>
      </div>
    </a>
  );
};

export default ContactCard;