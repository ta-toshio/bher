import Link from 'next/link'
import React from 'react'
import { StaffsQuery } from '../../../api/generated/graphql'

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data: StaffsQuery["staffs"]["edges"] | undefined
}

const List: React.FC<Props> = ({ data }) => {

  return (
    <>
      <div className="actions is-flex is-justify-content-flex-end p-2">
        <Link href="/admin/staffs/add">
          <button className="button">add</button>
        </Link>
      </div>
      <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
        <tr>
          <th>email</th>
          <th>name</th>
          <th>role</th>
          <th>action</th>
        </tr>
        </thead>
        <tbody>
        {data && data.map(staff => (
          <tr key={`staff-${staff?.node?.id}`}>
            <td>{staff?.node?.email}</td>
            <td>{staff?.node?.name}</td>
            <td>{staff?.node?.role}</td>
            <td>
              <Link href={`/admin/staffs/${staff.node.id}/edit`}>
                <button className="button">Edit</button>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default List
