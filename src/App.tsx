
function App() {

  return (
    <>
      <div className="h-56 bg-neutral-200 w-6 gap-3 flex flex-col justify-around text-gray-700 items-center mt-5 rounded-sm drop-shadow-lg font-bold">
        <img src="./portfolio.webp" alt="" className="size-32 rounded-full border-white border-2" />
        <p className="text-md">Arpon das | Fullstack Developer</p>
        <p>Technology: MERN, PERN.</p>
      </div>
      <div className="w-64 text-center">
        <p>
          I am a driven Full-Stack Developer complementing my Economics
          studies with advanced technical and analytical skills.
        </p>
        {/* <p>
          My focus is on achieving self-employment by delivering robust web
          solutions.
        </p>
        <p>
          I actively seek collaboration with experienced industry
          professionals to refine my craft, and I am committed to mentoring
          and helping those looking to enter the development industry.
        </p>
        <p>Let's connect to build innovative projects together!</p> */}
      </div>
    </>
  )
}

export default App
