import { useNavigate } from 'react-router-dom';
import wishlistimg from "/src/assets/img/wishlistimg.png";

function Wishlist({ add, setadd }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (typeof item.id !== "string") return;
    const [type, id] = item.id.split("-");
    navigate(`/${type}/${id}`);
  };

  const handleRemove = (uniqueId) => {
    const updatedWishlist = add.filter(item => item.id !== uniqueId);
    setadd(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className='h-auto min-h-[50rem] w-screen'>
      <h1 className='text-[2rem] text-white text-center font-bold'>Wishlist</h1>
      {add.length === 0 ? (
        <div className='flex items-center justify-center flex-col' >
        <h1 className='text-[1.5rem] text-white text-center font-bold'>No Items in Wishlist</h1>
        <img src={wishlistimg} alt="error in showing the image" />
        </div>
        
      ) : (
        <div className='grid grid-cols-2 mt-2 gap-[1rem] place-items-center md:grid-cols-3 xl:grid-cols-4 w-full'>
          {add.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
            >
              <figure
                className="h-[7rem] w-[8rem] md:h-[15rem] md:w-[18rem] rounded-2xl md:rounded-4xl overflow-hidden"
                onClick={() => handleItemClick(item)}
              >
                <img
                  className='h-full w-full object-cover'
                  src={item.img}
                  alt={item.title}
                />
              </figure>
              <button
                className="absolute top-1 right-1 px-2 py-1 text-xs md:text-sm bg-red-500 text-white rounded-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
