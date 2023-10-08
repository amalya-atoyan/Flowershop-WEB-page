import './ShopPage.css'
import Card from '../Card/Card';
import SearchError from '../SearchError/SearchError';


function ShopPage({flowers,txt}) {
  return (
    <div  className='shop'>
        {
          flowers.filter(el => el.title.includes(txt)).length
          ?
          [...flowers.filter(el => el.title.toLowerCase().includes(txt.toLowerCase()))]
          .sort((a,b) => a.title.toLowerCase().indexOf(txt.toLowerCase()) - b.title.toLowerCase().indexOf(txt.toLowerCase()))
          .map((el) => (
              <Card key={el.id} id={el.id} src={el.src} price={el.price} title={el.title} body={el.body} />
          ))
          : <SearchError/>
        }
    </div>
  );
}

export default ShopPage;