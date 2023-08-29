function Header() {
  return (
    <div className="sticky top-0  z-40 flex justify-between px-20 pt-3  bg-violet-800 text-white ">
      <a
        className="bg-primary-color/80 text-center text-yellow-400 font-semibold text-lg rounded-md w-16 py-2 relative"
        href="/"
      >
        getir
      </a>
      <div className="flex gap-5 ">
        <a href="/">Türkçe</a>
        <a href="/">Giriş Yap</a>
        <a href="/">Kayıt Ol</a>
      </div>
    </div>
  );
}
export default Header;
