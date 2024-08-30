import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Category
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            New Price
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Old Price
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Image
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.name} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.category}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.new_price}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.old_price}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.imgUrl}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/products/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/products/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/products/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
