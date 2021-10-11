import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Home() {
  const { email, signIn } = useContext(AuthContext)

  return (
    <div>
      ola mundo
    </div>
  )
}
