// import React, { useState, useEffect } from 'react';

// function TextDisplay() {
//   const [textList, setTextList] = useState([]);
//   const [textCount, setTextCount] = useState(0);

//   useEffect(() => {
//     fetch('http://localhost:3001/fetch')
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === true) {
//           setTextList(data.textList);
//           setTextCount(data.textList.length);
//         }
//       });
//   }, []);

//   return (
//     <div>
//       <p>{`Number of text items: ${textCount}`}</p>
//       {textList.map(text => (
//         <p key={text.id}>{text.content}</p>
//       ))}
//     </div>
//   );
// }

// export default TextDisplay;
