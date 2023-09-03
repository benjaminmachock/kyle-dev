// import { createContext, useContext, useState } from "react";

// const BookContext = createContext();

// export function ModalProvider({ children }) {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <BookContext.Provider value={{ showModal, openModal, closeModal }}>
//       {children}
//     </BookContext.Provider>
//   );
// }

// export function useModal() {
//   return useContext(BookContext);
// }

//Imports

const Book = () => {
  //Hooks

  //Functions

  return (
    <>
      <h1 style={{ color: "white" }}>BOOKING PAGE</h1>
    </>
  );
};

export default Book;
