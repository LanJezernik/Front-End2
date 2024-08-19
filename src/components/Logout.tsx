import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const loadCards = async () => {
        try {
            const res = await axios.post('http://localhost:8080/auth/logout', {}, { withCredentials: true });
            if (res.status === 200) {
                
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Handle the error (e.g., show a message to the user)
        }
    };

    useEffect(() => {
        loadCards();
    }, []);

    navigate("/Home");
    //window.location.reload();
    return null; // or <div>Logging out...</div> for user feedback
};

export default Logout;