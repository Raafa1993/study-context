import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Home({ children }: any) {
  const { email, signIn } = useContext(AuthContext)

  return (
    <div>
      ola mundo
    </div>
  )
}