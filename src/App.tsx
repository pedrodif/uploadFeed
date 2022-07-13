// Styles
import "./global.css";
import styles from "./app.module.css";

// Components
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/SideBar/Sidebar";
import { Post } from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/pedrodif.png",
      name: "Pedro Ferreira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-07-05 20:21:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/pedrodif.png",
      name: "Diana Laura",
      role: "Desktop Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-07-03 18:21:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
