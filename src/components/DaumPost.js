// import REACT, { useState } from 'react';
// import DaumPostCode from 'react-daum-postcode';

// const DaumPost = ({getData}) => {
//     const sendAdress = (fullAddress) => {
//         console.log(fullAddress);
//         getData(fullAddress);
//     }
//     const handleComplete = (data) => {
//         let fullAddress = data.address;
//         let extraAddress = '';
//         if (data.addressType === 'R') {
//             if (data.bname !== '') {
//                 extraAddress += data.bname;
//             }
//             if (data.buildingName !== '') {
//                 extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
//             }
//             fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
//         }
//         //fullAddress -> 전체 주소반환
//         sendAdress(fullAddress);
//     }
//     return (<DaumPostCode onComplete={handleComplete} className="post-code" />);
// }
// export default DaumPost;