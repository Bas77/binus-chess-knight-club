const ConstitutionSection = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">📜</span>
        </div>
        <h2 className="section-title mb-4">Our Constitution</h2>
        <p className="text-lg text-gray-700 mb-6">
          Learn more about our club's rules, regulations, and governance structure.
        </p>
        <a
          href="https://docs.google.com/document/d/1p-GUgnLFwgh9McdIufXWthqaz_4EgNKOHrdYMUoSFYU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          View Constitution
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};

export default ConstitutionSection;
