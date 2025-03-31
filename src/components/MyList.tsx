interface Props {
    header: string,
    items: string[]
}

function MyList({header, items}: Props) {
    var header = "Games";

    return (
        <div>
            <h2>{header}</h2>
            <ul>
                <li>{items.map((item, i) => {
                    return(
                        <li 
                        onClick={() => {
                            onListItemClick(item, i)
                        }}
                        key={`${item} ${i}`}>{item} {i}</li>
                    )
                })}</li>
            </ul>
        </div>
    );
}

function onListItemClick(item: string, i: number) {
    console.log(item);
    console.log(i);
}

export default MyList;