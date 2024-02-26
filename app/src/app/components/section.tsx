
function Section(theme: {backgroundColor: string}) {
    return (
        <section className="width:100% text-align:left padding-left:20% padding-right:20% background-color:${theme.backgroundColor}">
            <p>Hello :P ${theme.backgroundColor}</p>
        </section>
    );
}

export default Section;