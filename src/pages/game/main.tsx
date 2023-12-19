import { useEffect, useState } from 'react';
import { Card } from '../../components';
import { Game, Types } from 'modules';

const Main = () => {
  const [list, setList] = useState<Types.IEntity.Game.Mini[]>([]);

  useEffect(() => {
    async function fetchList() {
      const { data } = await Game.list();
      // @ts-ignore
      setList(data.data);
    }
    fetchList();
  }, []);

  return (
    <div className="container p-2 main flex align-center justify-evenly">
      {list.map(item => {
        console.log('item: ', item);
        return <Card key={item.id} {...item} />;
      })}
      <Card isNew />
    </div>
  );
};

export default Main;
