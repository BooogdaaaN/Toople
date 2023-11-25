import "../stylesheets/Course.scss";

import { useParams } from "react-router-dom";

import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import DoerCard from "../components/DoerCard";

function Course() {
    let { courseId } = useParams();
    //courseData[GET](course.id)
    const data = {
        courseName: "Администрирование информационных систем",
        teacherName: "Михайлова С.А",
        tasks: [
            {
                id: 12,
                name: "Практическое занятие 1. Общие сведения о системном администрировании",
                numberOfDoers: 2,
                doers: [
                    {
                        id: 1,
                        name: "Богдан",
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 2,
                        name: "Юльча",
                        doerVariantPrice: 400,
                        customerVariantPrice: 12000,
                    },
                ],
            },
            {
                id: 13,
                name: "Практическое занятие 2. Интернет жопы запросы ООООчень длинное название капец какое длинное просто вообращить не вомзхможно рельно",
                numberOfDoers: 3,
                doers: [
                    {
                        id: 3,
                        name: "Имя Делателя задания 1",
                        doerId: 1,
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 4,
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
                            name={task.name}
                            numberOfElements={task.numberOfDoers}
                            elements={task.doers.map((doer) => (
                                <DoerCard doer={doer} />
                            ))}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Course;
