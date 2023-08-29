function Footerr() {
  return (
    <div>
      <div>
        <div className="flex flex-row space-x-28 pl-20 bg-white rounded-2xl py-12 ">
          <div>
            <h1 className="text-violet-800 font-normal text-lg">
              Getir'i indirin
            </h1>
            <a href="/">
              <img
                className="pt-4"
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt="img"
              />
              <img
                className="pt-4"
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt="img"
              />
              <img
                className="pt-4"
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt="img"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-violet-800 font-normal text-lg">
              Getiri keşfedin
            </div>
            <a className="flex flex-col space-y-3" href="/">
              <div>Hakkımızda</div>
              <div>Kariyer</div>
              <div>Teknoloji Kariyerleri</div>
              <div>İletişim</div>
              <div>Sosyal Sorumluluk Projeleri</div>
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-violet-800 font-normal text-lg">
              Yardıma mı ihtiyacınız var
            </div>
            <a className="flex flex-col space-y-3" href="/">
              <div>Sıkça Sorulan Sorular</div>
              <div>Kişisel Verilerin Korunması</div>
              <div>Gizlilik Politikası</div>
              <div>Kullanım Koşulları</div>
              <div>Çerez Politikası</div>
              <div>İşlem Rehberi</div>
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="text-violet-800 font-normal text-lg">
              İş Ortağımız Olun
            </div>
            <a className="flex flex-col space-y-3" href="/">
              <div>Bayimiz Olun</div>
              <div>Deponuzu Kiralayın</div>
              <div>GetirYemek Restoranı Olun</div>
              <div>GetirÇarşı İşletmesi Olun</div>
              <div>Zincir Restoranlar</div>
            </a>
          </div>
          <div>
            <a href="/">
              <img
                className="w-20 h-24"
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt="img"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerr;
