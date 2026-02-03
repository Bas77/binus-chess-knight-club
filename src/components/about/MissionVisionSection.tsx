const MissionVisionSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-chessBlue">🎯</span>
          </div>
          <h3 className="font-bold text-2xl text-chessBlue mb-4 text-center">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700">
            To promote chess as an intellectual sport that enhances
            critical thinking, strategy, and patience. We aim to create a
            supportive community where players of all levels can improve
            their skills while forming lasting friendships.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="w-16 h-16 bg-chessGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-chessGreen">👁️</span>
          </div>
          <h3 className="font-bold text-2xl text-chessGreen mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700">
            To be recognized as the leading chess club among Indonesian
            universities, fostering a new generation of strategic thinkers
            and problem solvers who will excel not only in chess but in
            all aspects of their academic and professional lives.
          </p>
        </div>
      </div>

      {/* Values */}
      <h2 className="section-title text-center mb-8">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-chessBlue">🤝</span>
          </div>
          <h3 className="font-bold text-xl text-chessBlue mb-2">
            Community
          </h3>
          <p className="text-gray-700">
            Creating a welcoming environment for all chess enthusiasts,
            regardless of skill level.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-chessGreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-chessGreen">🧠</span>
          </div>
          <h3 className="font-bold text-xl text-chessGreen mb-2">
            Learning
          </h3>
          <p className="text-gray-700">
            Encouraging continuous improvement through regular practice,
            workshops, and mentorship.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-chessBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-chessBlue">🏆</span>
          </div>
          <h3 className="font-bold text-xl text-chessBlue mb-2">
            Excellence
          </h3>
          <p className="text-gray-700">
            Striving for the highest standards in competitions while
            maintaining good sportsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
