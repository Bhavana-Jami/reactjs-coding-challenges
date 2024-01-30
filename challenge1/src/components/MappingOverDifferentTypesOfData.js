import React, { useState } from "react";

function MappingOverDifferentTypesOfData() {
  const d = {
    employee: [
      {
        name: "Lilli",
        id: "2456_k",
        working: "true",
        likes: 78
      },
      {
        name: "millie",
        id: "2476_l",
        working: "true",
        likes: 112
      },
      {
        name: "silviwe",
        id: "8456_k",
        working: "false",
        likes: 78
      }
    ],
    categories: ["hi", "hello", "mi_amor"],
    likes: [45, 89, 67]
  };

  const [data, setData] = useState(d);
  return (
    <div>
      {Object.keys(data).map((first, firstIndex) => (
        <ul key={firstIndex}>
          {first.map((emp, empIndex) => (
            <div>
              <ul style={{ border: "1px solid black" }} key={empIndex}>
                <li>{emp.Name}</li>
                <li>{emp.Id}</li>
                <li>{emp.Likes}</li>
                <li>{emp.Working}</li>
              </ul>
              {data.categories.map((category, categoryIndex) => (
                <ul><li>{category}</li> </ul>
              ))}
              {data.likes.map((likes, likesIndex) => (
                <ul><li>{likes}</li> </ul>
              ))}
            </div>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default MappingOverDifferentTypesOfData;
