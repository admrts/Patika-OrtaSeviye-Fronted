import axios from "axios";

async function getData(userId) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  try {
    console.log(user, post);
  } catch (error) {
    console.log(error);
  }
}

export default getData;
