function Categor({ categories }) {
  return (
    <a
      href="#"
      className="cursor-pointer flex flex-col items-center text-center p-4"
    >
      <img className="w-14 h-14 " src={categories.image} alt="categoryİmg" />
      <span>{categories.title}</span>
    </a>
  );
}

export default Categor;
