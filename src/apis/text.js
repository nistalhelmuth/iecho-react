const CURRENT_URL = 'http://localhost:8000';

export const registerUser = (
  text,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/iecho${text ? `?text=${text}`: ''}`, {
    headers: {
      "Content-type": "application/json"
    },
  })
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});
