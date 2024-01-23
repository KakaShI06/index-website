import Link from 'next/link'

export default function Home() {
  const BLOGS = 'https://blogs.snapbit.in'
  return (
    <main>
      <h1 className='underline font-bold'> Main Portfolio Site: </h1>
      <Link href={'https://ujjval.snapbit.in'}> Portfolio </Link>

      <h2> Main Blog Website: </h2>
      <Link href={BLOGS}> Blogs Website </Link>

      <h3 className='underline font-bold'>My Latest Blogs</h3>
      <ul className='list-disc ml-8'>
        <li>
          <Link href={`${BLOGS}/blog/how-to-center-a-div`}>
            {' '}
            How to center a div{' '}
          </Link>
        </li>
        <li>
          <Link href={`${BLOGS}/blog/use-debounce-with-custom-hook`}>
            {' '}
            Debounce with react custom react hook{' '}
          </Link>
        </li>
        <li>
          <Link href={'https://blogs.snapbit.in/blog/module-bundler'}>Blog for understanding of Module Bundler</Link>
        </li>
      </ul>

      <h3>Other Projects:</h3>
      <ul>
        <li>
          <Link href={`https://gifmaker.snapbit.in`}>Gif Maker</Link>
        </li>
      </ul>
    </main>
  )
}
