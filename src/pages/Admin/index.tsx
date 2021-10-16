import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

export default function Admin({ children }: any) {
  const { email, signIn } = useContext(AuthContext)

  return (
    <div>
      ola Admin
    </div>
  )
}
