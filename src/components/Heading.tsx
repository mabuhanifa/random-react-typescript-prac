type Props = {
    title: string
}
export default function Heading({ title }: Props) {
    // const { title } = props;
    return (
        <div>
            {
                title
            }
        </div>
    )
}
