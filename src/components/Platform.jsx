import LeftProfile from "./LeftProfile"
import Transanctions from "./Transanctions"
import Chatbot from "./Chatbot"

const Platform = () => {
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem('jwt')) {
          navigate('/login');
        }
      }, []);

    return (
    <div className="grid md:grid-cols-6 gap-4">
        <div className="md:col-span-1 bg-gray-300">
            <LeftProfile />
        </div>
        <div className="md:col-span-4 bg-red-500">
            <Chatbot/>
        </div>
        <div className="md:col-span-1 bg-gray-300">
            <Transanctions/>
        </div>
    </div>
    
    )
}

export default Platform