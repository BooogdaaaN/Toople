import "../stylesheets/Course.scss";

import { useParams } from "react-router-dom";

import Dropdown from "../components/Dropdown";

function Course() {
    let { courseId } = useParams();
    // getCourse(courseId)
    const data = {
        courseName: "Администрирование информационных систем",
        teacherName: "Михайлова С.А",
        tasks: [
            {
                id: 1,
                name: "Практическое занятие 1. Общие сведения о системном администрировании",
                numberOfDoers: 2,
                doers: [
                    {
                        id: 1,
                        name: "Дмитрий",
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 2,
                        name: "Можноимясимфолов16",
                        doerVariantPrice: 400,
                        customerVariantPrice: "-",
                    },
                ],
            },
            {
                id: 2,
                name: "Практическое занятие 2. Интернет жопы запросы ООООчень длинное название капец какое длинное просто вообращить не вомзхможно рельно",
                numberOfDoers: 3,
                doers: [
                    {
                        id: 1,
                        name: "Имя Делателя задания 1",
                        doerId: 1,
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 2,
                        name: "Имя Делателя задания 2",
                        doerVariantPrice: 300,
                        customerVariantPrice: 600,
                    },
                ],
            },
        ],
    };
    return (
        <div className="course">
            <h1>{data.courseName}</h1>
            <h2>{data.teacherName}</h2>
            <ul>
                {data.tasks.map((task, index) => (
                    <li key={task.id}>
                        <Dropdown
                            taskName={task.name}
                            numberOfDoers={task.numberOfDoers}
                            doers={task.doers}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Course;
