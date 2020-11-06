import React from "react";
import "./Ninjas.css";

const Ninjas = ({ ninjas, deleteNinja }) => {
  //   const { ninjas } = props; // destructuring
  //   const ninjaList = ninjas.map((ninja) => {
  //     if (ninja.age >= 30) {
  //       return (
  //         <div className="ninja" key={ninja.id}>
  //           <div>Name: {ninja.name}</div>
  //           <div>Age: {ninja.age}</div>
  //           <div>Belt: {ninja.belt}</div>
  //           <br />
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age >= 30 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
        <br />
        <br />
      </div>
    ) : null;
  });

  return (
    <div className="ninja-list">
      <h2>Ninja List</h2>
      {ninjaList}
    </div>
  );
};

export default Ninjas;
