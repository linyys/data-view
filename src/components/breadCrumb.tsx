import { Link, useMatches } from 'react-router-dom';

function Item({ title }: { title: string }) {
  return (
    <div className='text-xs mx-1'>/{title}</div>
  )
}
export default function BreadCrumb() {
  const matches = useMatches();
  const nodes = matches.map((item) => {
    if (item.handle) {
      return (
        <Link to={item.pathname} key={item.pathname}>
          <Item title={item.handle as string} />
        </Link>
      )
    }
  })
  return (
    <div className='flex'>
      {nodes}
    </div>
  )
}