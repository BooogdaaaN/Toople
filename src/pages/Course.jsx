import "../stylesheets/Course.scss";

function Course() {
    const data = {
        tasks: [
            {
                name: "Практическое занятие 1. Общие сведения о системном администрировании",
                numberOfDoers: 2,
                doers: [
                    {
                        id: 1,
                        doerName: "Делатель Админки 1",
                        doerId: 1,
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 2,
                        doerName: "Делатель Админки 2",
                        doerId: 2,
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                ],
            },
            {
                name: "Практическое занятие 2. Интернет жопы запросы",
                numberOfDoers: 3,
                doers: [
                    {
                        id: 1,
                        doerName: "Делатель задания 1",
                        doerId: 1,
                        doerVariantPrice: 400,
                        customerVariantPrice: 800,
                    },
                    {
                        id: 2,
                        doerName: "Делатель задания 2",
                        doerId: 2,
                        doerVariantPrice: 300,
                        customerVariantPrice: 600,
                    },
                ],
            },
        ],
    };
    return (
        <div className="course">
            {/* <h1>Администрироварие информационных систем</h1>
        <h2>Михайлова С. А.</h2>
        <ul className="tasks-list">
            {data.tasks.map((task) => {
                     return (
                         <li></li>
                     )
                 })}
             </ul> */}
            <label htmlFor="dropdown">Select an option:</label>
            <select id="dropdown">
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    );
}
export default Course;
