import { Input } from '../../components/UI/input'
import cl from './cl.module.scss'
import { useInput } from '../../hooks/useInput'
import { Button } from '../../components/UI/button'
import { iconsSidebar } from '../../assets/icons/icons'
import { useLazySearchAddressQuery } from '../../store/daData/dadata.api'

export const Address = () => {
  const search = useInput('')

  const [fetchAdress, {data, isLoading, isError}] = useLazySearchAddressQuery()

  const handleFetchAdress = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (search.value.length > 2) {
      fetchAdress(search.value)
    }
  }

  return (
    <div className={cl.address} >
      <h2>Поиск адресов</h2>
      <div>Введите интересующий вас адрес</div>
      <form onSubmit={handleFetchAdress} >
        <Input {...search} placeholder='Введите интересующий вас адрес' />
        <Button>
          {iconsSidebar.search}
          Поиск
        </Button>
      </form>
      <ul>
        {isLoading &&
          <li>Загрузка...</li>
        }
        {data?.suggestions.map(address =>
          <li key={address.value} >{address.value}</li>
        )}
         {isError &&
          <li>Что-то пошло не так...</li>
        }
      </ul>
    </div>
  )
}
