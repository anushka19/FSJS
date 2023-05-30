
import { FaHome } from "react-icons/fa";

const Home = () => {
    const handlemain=()=>{
        // SetMovieList(true);
        window.location = "/";
        // ref3.current?.scrollIntoView({ behavior: "smooth" });
        // ref2.current?.scrollIntoView({ behavior: "smooth" });
      }
return (
    <>
      <div className="mt-10 flex flex-row justify-center text-center">
        <button
          onClick={handlemain}
          className="bg-white text-2xl p-2 ml-10 hover:scale-95 rounded-lg "
        >
          <FaHome />
        </button>
        <p className="text-4xl text-sky-600 font-bold text-center">
          Movie API using React JS
        </p>
       

      </div>

      
    </>
  );

}
export default Home;