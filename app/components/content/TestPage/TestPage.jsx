import cssStyle from "./TestPage.module.css";

const TestPage = async ({  }) => {

    const res = await fetch("http://localhost:3000/api/trashRemoverList", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
        // body: JSON.stringify({
        //     name: "testName",
        //     date: "01-01-0001"
        // })
    })

    const result = await res.json();

    return(
        <div>{ result.map((element, index) => (
            <div key={index}>{element.name} | {element.date}</div>
        )) }</div>
    );
};

export default TestPage;