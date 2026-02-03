const AchievementsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Achievement Group */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-semibold text-xl text-chessBlue mb-4 text-center">
          POMPROV DKI Jakarta
        </h3>
        <div className="h-48 mb-6 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/c5d0a761-dc86-4d2d-969f-68c90c4946d1.png"
            alt="BINUS Chess Club members with medals"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              2
            </div>
            <span className="text-lg text-chessBlue">
              Juara 2 Catur Cepat Beregu Putra
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              3
            </div>
            <span className="text-lg text-chessGreen">
              Juara 3 Catur Standar Beregu Putra
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              3
            </div>
            <span className="text-lg text-chessBlue">
              Juara 3 Catur Kilat Beregu Putra
            </span>
          </li>
        </ul>
      </div>

      {/* Second Achievement */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-semibold text-xl text-chessGreen mb-4 text-center">
          Piala Proklamator Rengasdengklok
        </h3>
        <div className="h-48 mb-6 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/7a491fbf-9589-4734-b24d-7815b5a974cf.png"
            alt="Trophy from Piala Proklamator Rengasdengklok"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              2
            </div>
            <span className="text-lg text-chessGreen">
              Juara 2 Piala Proklamator Rengasdengklok
            </span>
          </li>
        </ul>
      </div>

      {/* Super Chess Series III */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-semibold text-xl text-chessBlue mb-4 text-center">
          Super Chess Series III
        </h3>
        <div className="h-48 mb-6 overflow-hidden rounded-lg">
          <img
            src="/achievements/superchess.jpg"
            alt="BINUS Chess Club at Super Chess Series III"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              6
            </div>
            <span className="text-lg text-chessBlue">
              Team A - 6th Place
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              13
            </div>
            <span className="text-lg text-chessGreen">
              Team B - 13th Place
            </span>
          </li>
        </ul>
      </div>

      {/* BPJS Online INISIATIF */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-semibold text-xl text-chessGreen mb-4 text-center">
          BPJS Online INISIATIF
        </h3>
        <div className="h-48 mb-6 overflow-hidden rounded-lg">
          <img
            src="/achievements/bpjs-chess-battle.jpg"
            alt="Ray Mclung Gunawan at BPJS Chess Battle"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              2
            </div>
            <span className="text-lg text-chessGreen">
              Ray Mclung Gunawan - 2nd Place
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              13
            </div>
            <span className="text-lg text-chessBlue">
              Hibatullah Dony Ananda - 13th Place
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
              21
            </div>
            <span className="text-lg text-chessGreen">
              Jonathan Saputra - 21st Place
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AchievementsSection;
