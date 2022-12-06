type RNode /* ReactNode */ = string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
function UL<T>({ items, render }: { items: T[], render: (item: T) => RNode }) {
  return <ul>
    {
      items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))
    }

  </ul>;
};

export default UL;
