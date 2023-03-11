// adding comment
const addcomment = async (e, id, show, setshow, input, setInput, user) => {
  e.preventDefault();
  const response = await fetch(
    `http://localhost:8000/app/addcomment?id=${id}`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        name: user,
        text: input,
      }),
    }
  );

  // const data = await response.json();
  // console.log(data);
  show.comments.push({
    name: user,
    text: input,
  });
  setInput("");
};

// addlike
const addlike = async (e, id, show, setshow) => {
  e.preventDefault();
  // console.log("=", show);
  const likes = show.likes;
  try {
    const response = await fetch(`http://localhost:8000/app/addlike?id=${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        likes: likes,
      }),
    });
    // console.log("=", response);
    const data = await response.json();
    setshow(data);
    // console.log("=", data);
  } catch (error) {
    console.log(error);
  }
};

// add like
const adddislike = async (e, id, show, setshow) => {
  e.preventDefault();
  // console.log("=", show);
  const dislikes = show.dislikes;
  try {
    const response = await fetch(
      `http://localhost:8000/app/adddislike?id=${id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          dislikes: dislikes,
        }),
      }
    );
    // console.log("=", response);
    const data = await response.json();
    setshow(data);
    // console.log("=", data);
  } catch (error) {
    console.log(error);
  }
};
// addview
const addview = async (e, id, show, setshow) => {
  e.preventDefault();
  // console.log("=", show);
  const view = show.view;
  try {
    const response = await fetch(`http://localhost:8000/app/addview?id=${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        view: view,
      }),
    });
    // console.log("=", response);
    const data = await response.json();
    setshow(data);
    // console.log("=", data);
  } catch (error) {
    console.log(error);
  }
};

export { addcomment, addlike, adddislike, addview };
