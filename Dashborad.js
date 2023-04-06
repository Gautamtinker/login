import React from 'react'
import Cookies from 'js-cookie';
function Dashborad() {
  const myCookieValue = Cookies.get('jwt');
  console.log(myCookieValue);
// const cookies = cookieString.split(';');

// // Then loop through each cookie to find the one you need
// let myCookieValue = null;
// for (let i = 0; i < cookies.length; i++) {
//   const cookie = cookies[i].trim();
//   if (cookie.startsWith('myCookieName=')) {
//     myCookieValue = cookie.substring('myCookieName='.length, cookie.length);
//     break;
//   }
// }
  return (

    <div>Dashborad</div>
  )
}

export default Dashborad