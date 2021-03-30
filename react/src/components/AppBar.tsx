import { SearchBar } from '@/components/SearchBar';

export function AppBar() {
  return (
    <nav tw="flex justify-center items-center flex-auto bg-napari-primary h-napari-app-bar sticky top-0">
      <div tw="flex w-napari-container">
        <header tw="w-napari-section mr-napari-margin">
          <h1 tw="mr-8">
            napari <strong>hub</strong>
          </h1>
        </header>

        <section tw="w-napari-main">
          <SearchBar />
        </section>

        <section tw="w-napari-section ml-napari-margin" />
      </div>
    </nav>
  );
}
