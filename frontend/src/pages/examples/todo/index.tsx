import { NextPage } from 'next'
import List from '../../../components/sample/todo/List'

const Page: NextPage = () => {
  return (
    <div>
      <main className="container">
        <List />
      </main>
    </div>
  )
}

export default Page
