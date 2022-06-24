import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./components/Lesson";
import { Event } from "./Pages/Event";
import "./styles/global.css";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    // <ul>
    //   {data?.lessons.map((lesson: Lesson) => {
    //     return <li key={lesson.id}>{lesson.title}</li>;
    //   })}
    // </ul>
    <div>
      <Event />
    </div>
  );
}

export default App;
