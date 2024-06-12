// //01 calling api from javascript | XMLHttpRequest:

//event - onload(), onerror():

//property - response, responseType, responseText, responseURL, status, statusText.

//function - open(), send(), setRequestHeader():

// const makeRequest = (mathod, url, data) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//     xhr.open(mathod, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = () => {
//         const data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = () => {
//         console.log("Error is here");
//     }
//     xhr.send(JSON.stringify(data));
//     })
// }

// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then((res)=> {
//         console.log(res);
//     })
// }
// getData();

// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }
// sendData();

// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
//         id: 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     })
// }
// updateData();

// const updateSingalData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'Title is changed',
//     })
// }
// updateSingalData();

// const deletData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1',{

//     })
// }
// deletData();

// //02 calling api from javascript | fetch api:
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body : JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "PUT",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body : JSON.stringify({
//         id : 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "PATCH",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body : JSON.stringify({
//         title: 'fooma is changed',
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "DELETE",
// })

// .then((res) => {
//     if(!res.ok){
//         let message = `Error: ${res.status}`
//         throw new Error(message)
//     }
//     return res.json()
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err))

// //03 async await api calling function:
// const makeRequest = async (url,config) => {
//     const res = await fetch(url,config);
//     if(!res.ok){
//         const message = `Error : ${res.status}`
//         console.log(message);
//     }
//     const data = await res.json();
//     return data;
// };

// const sendData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .then((err) => console.log(err))
// }
// sendData();

// const updateSingalData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'PUT',
//         body: JSON.stringify({
//           id : 1,
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .then((err) => console.log(err))
// }
// updateSingalData();

// const petchData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'PETCH',
//         body: JSON.stringify({
//           title: 'foo is changed fooma',
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .then((err) => console.log(err))
// }
// petchData();

// const deleteData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'DELETE',
//       })
//     .then((res) => console.log(res))
//     .then((err) => console.log(err))
// }
// deleteData();

//04 calling api from javascript | axios api:
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios
//     .post('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios
//     .put('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id : 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios
//     .petch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PETCH',
//         body: JSON.stringify({
//             title: 'fooma is changed',
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios
//     .delete('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// //05 async await axios api:
// const makeRequest = async (config) => {
//     return await axios(config)
// }

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res))
//     .then((err) => console.log(err))
// }
// getData();

// const sendData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//         .then((res) => console.log(res))
//         .then((err) => console.log(err))
// }
// sendData();

// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id : 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//         .then((res) => console.log(res))
//         .then((err) => console.log(err))
// }
// updateData();

// const updateSingalData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'PETCH',
//         body: JSON.stringify({
//             title: 'foo is chenged fooma',
//         }),
//     })
//         .then((res) => console.log(res))
//         .then((err) => console.log(err))
// }
// updateSingalData();

// const deleteData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         method: 'DELETE',
//     })
//         .then((res) => console.log(res))
//         .then((err) => console.log(err))
// }
// deleteData();
