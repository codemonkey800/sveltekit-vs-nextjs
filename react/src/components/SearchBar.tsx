/* eslint-disable jsx-a11y/label-has-associated-control */
import { MdSearch } from 'react-icons/md';

export function SearchBar() {
  return (
    <form tw="border-b-2 border-black flex items-center">
      <label htmlFor="plugin-search">Plugin Search</label>
      <input
        id="plugin-search"
        tw="border-none bg-transparent outline-none flex flex-1"
      />
      <MdSearch tw="ml-2" />
    </form>
  );
}
