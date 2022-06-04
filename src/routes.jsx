import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";

const AllRoutes = ({ flight }) => {
    return (
        <Routes>
            {/* Aqui eu tenho uma rota que passa um id */}
            {/* passo também o array para o componente */}
            <Route path='/:id' element={<Modal flight={flight} />} />
            <Route path='*' element={<></>} />
        </Routes>
    );
};

export default AllRoutes;
