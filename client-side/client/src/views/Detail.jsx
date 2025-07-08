import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDetailProduct } from "../store/actions/actionProducts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MEME_URL = "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"; // Fun meme GIF

export default function Details() {
  let { id } = useParams();
  let data = useSelector((state) => state.productsReducer.detail);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [showMeme, setShowMeme] = useState(false);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, []);

  const handleEnroll = async () => {
    setIsEnrolling(true);
    setTimeout(() => {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      if (!enrolledCourses.find(course => course.id === data.id)) {
        enrolledCourses.push({
          id: data.id,
          name: data.name,
          enrolledAt: new Date().toISOString()
        });
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        // Add XP
        const currentXp = parseInt(localStorage.getItem('xp') || '0', 10);
        localStorage.setItem('xp', (currentXp + 50).toString());
        // Show meme popup
        setShowMeme(true);
      }
      toast.success(`🎉 Successfully enrolled in "${data.name}"! +50 XP gained!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsEnrolling(false);
      setTimeout(() => {
        setShowMeme(false);
        navigate('/courses');
      }, 2500);
    }, 1000);
  };

  if (!data || !data.name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <span className="text-gray-300 text-xl animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4 py-16">
      {/* Meme Modal */}
      {showMeme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-bounceIn">
            <img src={MEME_URL} alt="Meme" className="w-48 h-48 object-contain mb-4 rounded-xl" />
            <h2 className="text-2xl font-extrabold text-pink-500 mb-2 text-center">+50 XP!<br/>You leveled up your skills! 🚀</h2>
            <p className="text-gray-700 text-center">Keep going for more meme prizes!</p>
          </div>
        </div>
      )}
      <div className="max-w-3xl w-full bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 transition-colors duration-500 relative">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src={data.mainImg}
            alt={data.name}
            className="rounded-xl shadow-lg w-full max-w-xs object-cover mb-4 border-4 border-pink-500"
          />
          <span className="absolute top-6 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-bounce z-10">🔥 XP +10</span>
          {JSON.parse(localStorage.getItem('enrolledCourses') || '[]').find(course => course.id === data.id) && (
            <span className="absolute top-6 left-6 bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse z-10">Enrolled ✅</span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <span className="badge bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded mb-2 w-fit">{data.Category?.name}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">{data.name}</h1>
          <p className="text-gray-300 text-lg mb-4">By <span className="font-bold text-pink-400">{data.User?.username}</span></p>
          <p className="text-gray-400 mb-6">{data.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-bold text-2xl text-green-400">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}
            </span>
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">MEME PRIZE 🏆</span>
          </div>
          <button 
            onClick={handleEnroll}
            disabled={isEnrolling || JSON.parse(localStorage.getItem('enrolledCourses') || '[]').find(course => course.id === data.id)}
            className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 ${isEnrolling ? 'opacity-50 cursor-not-allowed' : 'animate-bounce'} ${JSON.parse(localStorage.getItem('enrolledCourses') || '[]').find(course => course.id === data.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {JSON.parse(localStorage.getItem('enrolledCourses') || '[]').find(course => course.id === data.id)
              ? 'Already Enrolled'
              : isEnrolling ? 'Enrolling... 🚀' : '🚀 Enroll Now'}
          </button>
        </div>
      </div>
    </div>
  );
}
