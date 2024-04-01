import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "../Home/Home"
import { Menu } from "../Menu/Menu"
import { Contacto } from "../Contacto/Contacto"

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    );
}