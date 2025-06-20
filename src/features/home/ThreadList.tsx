import { useState } from "react";
import Thread from "./Thread";
import Home from "./Home";

function ThreadList() {
  const [thread, setThread] = useState([
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Indah Pra Karya",
      username: "indhPK",
      time: "4h",
      content: "what do you think about programming?",
      likes: 99,
      replies: 999,
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      nama: "Shofiyatunnisa",
      username: "shfytnnsa",
      time: "1h",
      content: "today we fight",
      likes: 20,
      replies: 199,
      image:
        "https://www.diykamera.com/wp-content/uploads/2017/07/cara-memotret-pemandangan.jpg",
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      nama: "Septania Haaaa",
      username: "niaH22",
      time: "22h",
      content: "spring day also a good song for me...",
      likes: 99,
      replies: 999,
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Kim Namjoon",
      username: "kjoon94",
      time: "22h",
      content: "Welcome to my world.....",
      likes: 99,
      replies: 999,
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Seokjin Kim",
      username: "jinjinjin",
      time: "3h",
      content: "Lorem Ipsum is simply dummy text...",
      likes: 79,
      replies: 999,
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Yoongi Min",
      username: "agustD",
      time: "9h",
      content: "Lorem Ipsum is not simply random text. ...",
      likes: 99,
      replies: 999,
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Septania Haaaa",
      username: "niaH22",
      time: "22h",
      content: "spring day also a good song for me...",
      likes: 99,
      replies: 999,
    },
    {
      imageProfile:
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      nama: "Hoseok Jung",
      username: "yourHobie",
      time: "2h",
      content: "Lorem ipsum dolor sit amet, ...",
      likes: 99,
      replies: 999,
    },
  ]);

  const addThread = (text: string) => {
    const newThread = {
      imageProfile: "",
      nama: "you",
      username: "you",
      time: "now",
      content: text,
      likes: 0,
      replies: 0,
    };
    setThread([newThread, ...thread]);
  };
  return (
    <div>
      <Home onPost={addThread} />
      {thread.map((thread, index) => (
        <Thread key={index} {...thread} />
      ))}
    </div>
  );
}

export default ThreadList;
