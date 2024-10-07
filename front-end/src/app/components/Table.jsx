"use client"; // Necesario para usar hooks como useState y useEffect

import { useState, useEffect } from "react";

// Función para cargar todos los contactos desde la API
async function loadContacts(query = "") {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos?nombre=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para cargar contactos cuando se monta el componente o cuando se realiza una búsqueda
  useEffect(() => {
    const fetchContacts = async () => {
      const data = await loadContacts();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = async () => {
    const data = await loadContacts(searchTerm);
    setContacts(data);
  };

  return (
    <div>
      <h1>App de Contactos</h1>

      {/* Input para el filtro */}
      <div>
        <input
          type="text"
          placeholder="Buscar contacto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {/* Tabla para mostrar los contactos */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.nombre}</td>
                <td>{contact.numero}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No hay contactos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
