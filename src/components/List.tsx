const List: React.FunctionComponent<{ items: string[]; onClick?: (item: string) => void }> = ({ items }) => (
    <ul>
        {
            items.map((item, index) => (
                <li key={index}>{item}</li>
            ))
        }
    </ul>
)

export default List