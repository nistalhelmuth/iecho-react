const CURRENT_URL = 'http://localhost:8000';

export const registerUser = (
  text,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/users/register/`, {
    headers: {
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      text,
    })
  })
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});
